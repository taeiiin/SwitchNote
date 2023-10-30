package com.example.switchnote_back.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import com.example.switchnote_back.domain.UserRole;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //userSeq라고 생각하면 됨

    private String loginId;
    private String email;
    private String password;
    private String nickname;
    private Long birthYear;
    private Long birthMonth;
    private Long birthDay;
    private String gender;
    private String job;
    private UserRole role;
    private String agreePolicy;
    private String agreeInfoCollection;
    private String agreePromotionEmails;


//    // OAuth 로그인에 사용
//    private String provider;
//    private String providerId;
}
