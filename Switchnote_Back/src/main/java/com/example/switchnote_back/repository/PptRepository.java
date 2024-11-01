package com.example.switchnote_back.repository;
import com.example.switchnote_back.domain.entity.Ppt;
import com.example.switchnote_back.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PptRepository extends JpaRepository<Ppt, Long> {
    //    User findByLoginId(String loginId);
    Ppt findByUserAndPptUrl(User user, String pptUrl);
    Ppt findByUserId(Long userId);
    List<Ppt> findByUser(User user);
}