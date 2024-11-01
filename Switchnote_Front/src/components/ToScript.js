import React, { useEffect, useState } from 'react';
import aws from 'aws-sdk';
import { useNavigate } from "react-router-dom";

const ToScript = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const pyscript = require('pyscript-react');
    const { PtoS } = require('./PPTtoScript.py');

    function pyS(file) {
        if (file) {
            PtoS(file)
                .then(result => {
                    console.log('함수 호출 성공');
                    setResult(result);
                })
                .catch(error => {
                    console.log('함수 호출 실패');
                    console.error(error);
                });
        }
        else {
            console.log('파일 없음');
        }
    };

    useEffect(() => {
        const s3 = new aws.S3({
            accessKeyId: 'AKIAU4PAKJFYHKHYQX6A',
            secretAccessKey: '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',
            region: 'ap-southeast-2'
        });

        const params = {
            Bucket: 'pptforscript',
            Key: 'sample.pptx',
            ResponseContentType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        };

        s3.getObject(params, function(err, data) {
            if (err) {
                console.log('s3 연결 실패');
                console.log(err, err.stack);
            } else {
                console.log('s3 연결 성공');
                console.log(data);
                const file = new File([data.Body], 'sample.pptx', { type: data.ContentType });
                console.log(file.name);
                if(file) {
                    pyS(file);
                }
                else {
                    console.log('file null')
                }
            }
        });
    }, []);

    return(
        <div>
            {file && <img src={file} alt="pptx 파일" />}
        </div>
    )
}

export default ToScript;