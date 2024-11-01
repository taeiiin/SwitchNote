package com.example.switchnote_back.controller;
import com.example.switchnote_back.domain.dto.PptRequest;
import com.example.switchnote_back.domain.entity.Ppt;
import com.example.switchnote_back.domain.entity.User;
import com.example.switchnote_back.repository.PptRepository;
import com.example.switchnote_back.repository.UserRepository;
import com.example.switchnote_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/ppt")
public class PptController {
    private final PptRepository pptRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    @Autowired
    public PptController(PptRepository pptRepository, UserRepository userRepository, UserService userService) {
        this.pptRepository = pptRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/download")
    public void downloadPPT(@RequestBody PptRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User loginUser = userService.getLoginUserByLoginId(username);

        if (loginUser == null) {
            // 사용자를 찾지 못했을 경우 예외 처리
            throw new RuntimeException("User not found");
        }

        Ppt existingRecord = pptRepository.findByUserAndPptUrl(loginUser, request.getPptUrl());

        // 해당 사용자와 url에 대한 레코드가 이미 존재하는 경우 저장하지 않음
        if (existingRecord == null) {
            Ppt ppt = new Ppt();
            ppt.setPptUrl(request.getPptUrl());
            ppt.setUser(loginUser);
            ppt.setPptTitle(request.getPptTitle());
            ppt.setPptContent(request.getPptContent());
            ppt.setCreatedAt(LocalDateTime.now());

            pptRepository.save(ppt);
        }
    }
    @GetMapping("/workspace")
    public List<Ppt> workspacePPT() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User loginUser = userService.getLoginUserByLoginId(username);

        if (loginUser == null) {
            // 사용자를 찾지 못했을 경우 예외 처리
            throw new RuntimeException("User not found");
        }

        return pptRepository.findByUser(loginUser);
    }
}
