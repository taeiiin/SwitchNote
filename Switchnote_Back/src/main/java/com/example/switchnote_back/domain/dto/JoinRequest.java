package com.example.switchnote_back.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.example.switchnote_back.domain.UserRole;
import com.example.switchnote_back.domain.entity.User;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
public class JoinRequest {

    @NotBlank(message = "로그인 아이디가 비어있습니다.")
    private String loginId;
    @NotBlank(message = "이메일이 비어있습니다.")
    private String email;
    @NotBlank(message = "비밀번호가 비어있습니다.")
    private String password;
    private String passwordCheck;

    @NotBlank(message = "닉네임이 비어있습니다.")
    private String nickname;
    private Long birthYear;
    private Long birthMonth;
    private Long birthDay;
    private String gender;
    private String job;
    private String agreePolicy;
    private String agreeInfoCollection;
    private String agreePromotionEmails;


    // 비밀번호 암호화 X
    public User toEntity() {
        return User.builder()
                .loginId(this.loginId)
                .email(this.email)
                .password(this.password)
                .nickname(this.nickname)
                .birthYear(this.birthYear)
                .birthMonth(this.birthMonth)
                .birthDay(this.birthDay)
                .gender(this.gender)
                .job(this.job)
                .role(UserRole.USER)
                .agreePolicy(this.agreePolicy)
                .agreeInfoCollection(this.agreeInfoCollection)
                .agreePromotionEmails(this.agreePromotionEmails)
                .build();
    }

    // 비밀번호 암호화
    public User toEntity(String encodedPassword) {
        return User.builder()
                .loginId(this.loginId)
                .password(encodedPassword)
                .nickname(this.nickname)
                .birthYear(this.birthYear)
                .birthMonth(this.birthMonth)
                .birthDay(this.birthDay)
                .gender(this.gender)
                .job(this.job)
                .role(UserRole.USER)
                .build();
    }
}
