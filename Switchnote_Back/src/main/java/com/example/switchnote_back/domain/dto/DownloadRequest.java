package com.example.switchnote_back.domain.dto;

public class DownloadRequest {
    private String pptUrl;
    private String pptTitle;
    private String pptContent;

    public String getPptUrl() {
        return pptUrl;
    }

    public void setPptUrl(String pptUrl) {
        this.pptUrl = pptUrl;
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
}
