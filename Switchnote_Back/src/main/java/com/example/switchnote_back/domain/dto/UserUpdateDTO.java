package com.example.switchnote_back.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserUpdateDTO {
    private String email;
    private String password;
    private String nickname;
    private Long birthYear;
    private Long birthMonth;
    private Long birthDay;
    private String job;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getNickname() {
        return nickname;
    }

    public Long getBirthYear() {
        return birthYear;
    }

    public Long getBirthMonth() {
        return birthMonth;
    }

    public Long getBirthDay() {
        return birthDay;
    }
    public String getJob() {
        return job;
    }
}