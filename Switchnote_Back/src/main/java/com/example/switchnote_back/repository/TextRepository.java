package com.example.switchnote_back.repository;

import com.example.switchnote_back.domain.entity.Text;
import com.example.switchnote_back.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TextRepository extends JpaRepository<Text, Long> {
    Text findByUserAndScript(User user, String text);
}