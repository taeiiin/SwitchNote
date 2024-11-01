package com.example.switchnote_back.controller;

import com.example.switchnote_back.domain.dto.UserUpdateDTO;
import com.example.switchnote_back.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import com.example.switchnote_back.auth.JwtTokenUtil;
import com.example.switchnote_back.domain.dto.JoinRequest;
import com.example.switchnote_back.domain.dto.LoginRequest;
import com.example.switchnote_back.domain.entity.User;
import com.example.switchnote_back.service.UserService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/jwt-api-login")
public class JwtLoginApiController {

    private final UserService userService;
    private final UserRepository userRepository;

    @PostMapping("/join")
    public String join(@RequestBody JoinRequest joinRequest) {

        // loginId 중복 체크
        if(userService.checkLoginIdDuplicate(joinRequest.getLoginId())) {
            return "로그인 아이디가 중복됩니다.";
        }
        if(userService.checkEmailDuplicate(joinRequest.getEmail())) {
            return "이메일이 중복됩니다.";
        }
        // password와 passwordCheck가 같은지 체크
        if(!joinRequest.getPassword().equals(joinRequest.getPasswordCheck())) {
            return"비밀번호가 일치하지 않습니다.";
        }

//        userService.join2(joinRequest);
//        return "회원가입 성공";
        userService.join(joinRequest);
        return "회원가입 성공";
    }
    @PostMapping("/check-id")
    public ResponseEntity<?> checkId(@RequestBody Map<String, String> request) {
        String loginId = request.get("loginId");

        // 중복 여부 확인 로직
        boolean isAvailable = userService.checkLoginIdDuplicate(loginId);

        Map<String, Boolean> response = new HashMap<>();
        response.put("available", isAvailable);

        return ResponseEntity.ok(response);
    }
    @PostMapping("/check-email")
    public ResponseEntity<?> checkEmail(@RequestBody Map<String, String> request) {
        String email = request.get("email");

        // 중복 여부 확인 로직
        boolean isAvailable = userService.checkEmailDuplicate(email);

        Map<String, Boolean> response = new HashMap<>();
        response.put("available", isAvailable);

        return ResponseEntity.ok(response);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {

        User user = userService.login(loginRequest);

        // 로그인 아이디나 비밀번호가 틀린 경우 global error return
        if(user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("로그인 아이디 또는 비밀번호가 틀렸습니다.");
        }

        // 로그인 성공 => Jwt Token 발급

        String secretKey = "sn-hanium-key-333123";
        long expireTimeMs = 1000 * 60 * 60;     // Token 유효 시간 = 60분

        String jwtToken = JwtTokenUtil.createToken(user.getLoginId(), secretKey, expireTimeMs);

        // 로그인 성공 => userId 반환
        Long userId = user.getId();

        // 응답 객체 생성
        Map<String, Object> response = new HashMap<>();
        response.put("jwtToken", jwtToken);
        response.put("userId", userId);

        return ResponseEntity.ok(response);
    }

    //이건 가져올 거 정해지면 수정할 것
    @GetMapping("/info")
    public String userInfo(Authentication auth) {
        User loginUser = userService.getLoginUserByLoginId(auth.getName());

        return String.format("loginId : %s\nnickname : %s\nrole : %s",
                loginUser.getLoginId(), loginUser.getNickname(), loginUser.getRole().name());
    }

    @GetMapping("/admin")
    public String adminPage() {
        return "관리자 페이지 접근 성공";
    }

    @PostMapping("/update")
    public void userInfoUpdate(@RequestBody UserUpdateDTO userUpdateDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User loginUser = userService.getLoginUserByLoginId(username);


        if (loginUser == null) {
            // 사용자를 찾지 못했을 경우 예외 처리
            throw new RuntimeException("User not found");
        }
        loginUser.setEmail(userUpdateDTO.getEmail());
        loginUser.setPassword(userUpdateDTO.getPassword());
        loginUser.setNickname(userUpdateDTO.getNickname());
        loginUser.setBirthYear(userUpdateDTO.getBirthYear());
        loginUser.setBirthMonth(userUpdateDTO.getBirthMonth());
        loginUser.setBirthDay(userUpdateDTO.getBirthDay());
        loginUser.setJob(userUpdateDTO.getJob());

        userRepository.save(loginUser);
    }

}
