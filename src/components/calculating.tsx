import { useEffect, useState } from "react";

export default function Calculating(props: { verifiedYear: number; }) {
    const [progressText, changeProgess] = useState("Bạn đã được vào hàng chờ, yêu cầu của bạn sẽ được xử lí trong thời gian ngắn...");
    const [displayTime, changeTime] = useState(`Thời gian ước tính: 0 giây`);
    const [done, changeDone] = useState(false);

    useEffect(() => {
        const GPURigKey = Math.floor(Math.random() * 10000000);
        let estimatedTime = Math.floor(Math.random() * 20);
        changeTime(`Thời gian ước tính: ${estimatedTime} giây`);
        setTimeout(() => {
            changeProgess(`Đang đẩy yêu cầu vào GPU session key #${GPURigKey}...`);
            estimatedTime = Math.floor(Math.random() * 20);
            changeTime(`Thời gian ước tính: ${estimatedTime} giây`);
            setTimeout(() => {
                estimatedTime = Math.floor(Math.random() * 20);
                changeTime(`Thời gian ước tính: ${estimatedTime} giây`);
                changeProgess(`Đang phân tích vào phỏng đoán từ model GemiGPT 4.0...`);
                setTimeout(() => {
                    changeTime(`Hoàn thành công việc!`);
                    changeProgess(`GemiGPT 4.0: Bạn năm nay ${(new Date().getFullYear()) - props.verifiedYear} tuổi.`);
                    changeDone(true);
                }, estimatedTime * 1000);
            }, estimatedTime * 1000);
        }, estimatedTime * 1000);
    }, [props.verifiedYear]);

    return (
        <div className="card w-96 bg-neutral text-neutral-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{done ? "Kết quả" : "Đang chờ..."}</h2>
                <p className={done ? "text-success" : ""}>{progressText}</p>
                {done ? <></> : <span className="loading loading-spinner loading-lg"></span>}
                <p className={done ? "text-success" : ""}>{displayTime}</p>
            </div>
        </div>
    );
}