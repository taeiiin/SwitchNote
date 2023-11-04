package com.example.switchnote_back.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DownloadRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String pptUrl;
    private String pptTitle;
    private String pptContent;
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

    public String getPptUrl() {
        return pptUrl;
    }
    public void setPptUrl(String pptUrl) {
        this.pptUrl = pptUrl;
    }

    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public String getPptTitle() {
        return pptTitle;
    }
    public void setPptTitle(String pptTitle) {
        this.pptTitle = pptTitle;
    }

    public String getPptContent() {
        return pptContent;
    }
    public void setPptContent(String pptContent) {
        this.pptContent = pptContent;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

}
