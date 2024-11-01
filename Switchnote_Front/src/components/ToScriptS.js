import React, { useEffect, useState } from 'react';
import pyscript from 'pyscript-react';

const ToScriptS = ({ file }) => {
    const [result, setResult] = useState(null);
    const pyscript = require('./PPTtoScript.py');

    useEffect(() => {
        if (file) {
            pyscript.PtoS(file)
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
            console.log('파일 없음')
        }
    }, [file]);

    return (
        <div>
            {result && <p>{result}</p>}
        </div>
    );
};

export default ToScriptS;
export { ToScriptS };