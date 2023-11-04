package com.example.switchnote_back.domain.dto;

import com.example.switchnote_back.domain.entity.User;

public class TextRequest {
    private String script;
    private String scriptTitle;
    private String scriptContent;

    public String getScript() { return script; }
    public void setScript(String script) {
        this.script = script;
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
