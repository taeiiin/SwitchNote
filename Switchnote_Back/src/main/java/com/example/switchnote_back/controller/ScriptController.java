package com.example.switchnote_back.controller;
import com.example.switchnote_back.domain.dto.ScriptRequest;
import com.example.switchnote_back.domain.entity.Script;
import com.example.switchnote_back.domain.entity.User;
import com.example.switchnote_back.repository.ScriptRepository;
import com.example.switchnote_back.repository.UserRepository;
import com.example.switchnote_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/script")
public class ScriptController {
    private final ScriptRepository scriptRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    @Autowired
    public ScriptController(ScriptRepository scriptRepository, UserRepository userRepository, UserService userService) {
        this.scriptRepository = scriptRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping("/download")
    public void downloadSCRIPT(@RequestBody ScriptRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User loginUser = userService.getLoginUserByLoginId(username);

        if (loginUser == null) {
            // 사용자를 찾지 못했을 경우 예외 처리
            throw new RuntimeException("User not found");
        }

        Script existingRecord = scriptRepository.findByUserAndScriptUrl(loginUser, request.getScriptUrl());

        // 해당 사용자와 url에 대한 레코드가 이미 존재하는 경우 저장하지 않음
        if (existingRecord == null) {
            Script script = new Script();
            script.setScriptUrl(request.getScriptUrl());
            script.setUser(loginUser);
            script.setScriptTitle(request.getScriptTitle());
            script.setScriptContent(request.getScriptContent());
            script.setCreatedAt(LocalDateTime.now());

            scriptRepository.save(script);
        }
    }
    @GetMapping("/workspace")
    public List<Script> workspaceScript() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        User loginUser = userService.getLoginUserByLoginId(username);

        if (loginUser == null) {
            // 사용자를 찾지 못했을 경우 예외 처리
            throw new RuntimeException("User not found");
        }

        return scriptRepository.findByUser(loginUser);
    }
}
