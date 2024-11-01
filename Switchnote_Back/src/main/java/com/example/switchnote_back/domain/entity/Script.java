package com.example.switchnote_back.domain.entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "text")
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Script {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 10000) // 텍스트의 최대 길이를 지정해주세요.
    private String scriptUrl;
    private String scriptTitle;
    private String scriptContent;
    private LocalDateTime createdAt;
    @ManyToOne
    private User user;

    //getter and setter
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getScriptUrl() {  return scriptUrl; }
    public void setScriptUrl(String scriptUrl) {
        this.scriptUrl = scriptUrl;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public String getScriptTitle() {
        return scriptTitle;
    }
    public void setScriptTitle(String scriptTitle) {
        this.scriptTitle = scriptTitle;
    }

    public String getScriptContent() { return scriptContent; }
    public void setScriptContent(String scriptContent) {
        this.scriptContent = scriptContent;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}

