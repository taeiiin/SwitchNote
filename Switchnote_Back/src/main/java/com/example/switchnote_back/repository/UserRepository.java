package com.example.switchnote_back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.switchnote_back.domain.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByLoginId(String loginId);
    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);
    Optional<User> findByLoginId(String loginId);
}
