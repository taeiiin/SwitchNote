package com.example.switchnote_back.repository;
import com.example.switchnote_back.domain.entity.Script;
import com.example.switchnote_back.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScriptRepository extends JpaRepository<Script, Long> {
    //    User findByLoginId(String loginId);
    Script findByUserAndScriptUrl(User user, String scriptUrl);
    Script findByUserId(Long userId);
    List<Script> findByUser(User user);
}