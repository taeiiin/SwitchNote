package com.example.switchnote_back.repository;
import com.example.switchnote_back.domain.entity.DownloadRecord;
import com.example.switchnote_back.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface DownloadRecordRepository extends JpaRepository<DownloadRecord, Long> {
//    User findByLoginId(String loginId);
    DownloadRecord findByUserAndPptUrl(User user, String pptUrl);
}