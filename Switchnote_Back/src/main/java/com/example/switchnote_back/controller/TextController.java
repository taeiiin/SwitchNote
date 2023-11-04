package com.example.switchnote_back.controller;

import com.example.switchnote_back.domain.dto.TextRequest;
import com.example.switchnote_back.domain.entity.Text;
import com.example.switchnote_back.domain.entity.User;
import com.example.switchnote_back.repository.TextRepository;
import com.example.switchnote_back.repository.UserRepository;
import com.example.switchnote_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
@RequestMapping("/text")
public class TextController {
    private final TextRepository textRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    @Autowired
    public TextController(TextRepository textRepository, UserRepository userRepository, UserService userService) {
        this.textRepository = textRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/download")
    public void downloadScript(@RequestBody TextRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User loginUser = userService.getLoginUserByLoginId(username);

        if (loginUser == null) {
            // 사용자를 찾지 못했을 경우 예외 처리
            throw new RuntimeException("User not found");
        }

        Text existingText = textRepository.findByUserAndScript(loginUser, request.getScript());

        // 해당 사용자와 text에 대한 레코드가 이미 존재하는 경우 저장하지 않음
        if (existingText == null) {
            Text text = new Text();
            text.setScript(request.getScript());

            text.setUser(loginUser);
            text.setScriptTitle(request.getScriptTitle());
            text.setScriptContent(request.getScriptContent());
            text.setCreatedAt(LocalDateTime.now());

            textRepository.save(text);
        }
    }
}