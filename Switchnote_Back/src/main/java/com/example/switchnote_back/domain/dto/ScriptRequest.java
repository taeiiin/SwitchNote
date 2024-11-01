package com.example.switchnote_back.domain.dto;

public class ScriptRequest {
    private String scriptUrl;
    private String scriptTitle;
    private String scriptContent;

    public String getScriptUrl() { return scriptUrl; }
    public void setScriptUrl(String scriptUrl) {
        this.scriptUrl = scriptUrl;
    }

    public String getScriptTitle() {
        return scriptTitle;
    }
    public void setScriptTitle(String scriptTitle) {
        this.scriptTitle = scriptTitle;
    }

    public String getScriptContent() { return scriptContent; }
    public void setScriptContent(String scriptContent) {
        this.scriptContent = scriptContent;
    }
}
