package com.example.switchnote_back.controller;
import com.example.switchnote_back.domain.dto.DownloadRequest;
import com.example.switchnote_back.domain.entity.DownloadRecord;
import com.example.switchnote_back.domain.entity.User;
import com.example.switchnote_back.repository.DownloadRecordRepository;
import com.example.switchnote_back.repository.UserRepository;
import com.example.switchnote_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/ppt")
public class DownloadController {
    private final DownloadRecordRepository downloadRecordRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    @Autowired
    public DownloadController(DownloadRecordRepository downloadRecordRepository, UserRepository userRepository, UserService userService) {
        this.downloadRecordRepository = downloadRecordRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/download")
    public void downloadPPT(@RequestBody DownloadRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User loginUser = userService.getLoginUserByLoginId(username);

        if (loginUser == null) {
            // 사용자를 찾지 못했을 경우 예외 처리
            throw new RuntimeException("User not found");
        }

        DownloadRecord existingRecord = downloadRecordRepository.findByUserAndPptUrl(loginUser, request.getPptUrl());

        // 해당 사용자와 url에 대한 레코드가 이미 존재하는 경우 저장하지 않음
        if (existingRecord == null) {
            DownloadRecord downloadRecord = new DownloadRecord();
            downloadRecord.setPptUrl(request.getPptUrl());
            downloadRecord.setUser(loginUser);
            downloadRecord.setPptTitle(request.getPptTitle());
            downloadRecord.setPptContent(request.getPptContent());
            downloadRecord.setCreatedAt(LocalDateTime.now());

            downloadRecordRepository.save(downloadRecord);
        }
    }

}

