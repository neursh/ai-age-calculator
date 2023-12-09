import { useRef, useState } from "react";

export default function HumanVerifiy(props: { updateVerify: (arg0: boolean) => void; changeYear: (arg0: number) => void; }) {
    const yearInput = useRef(null);
    const [infoWarning, updateWarning] = useState(" ");

    return (
        <div className="card w-96 bg-neutral text-neutral-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Máy tính tuổi bằng AI</h2>
                <p>Vui lòng điền năm sinh của bạn để xác thực người dùng, phòng tránh bot:</p>
                <input ref={yearInput} type="text" placeholder="Năm sinh" className="input input-bordered w-full max-w-xs" />
                <p className="text-error">
                    {infoWarning}
                </p>
                <div className="card-actions justify-end active:">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            const number = parseInt((yearInput.current! as HTMLInputElement).value);
                            if (Number.isNaN(number) || (new Date().getFullYear()) - number > 100 || (new Date().getFullYear()) - number < 5) {
                                    updateWarning("Không thể xác thực bạn là con người 🤖😥 Vui lòng kiểm tra lại!");
                            } else {
                                props.updateVerify(true);
                                props.changeYear(parseInt((yearInput.current! as HTMLInputElement).value));
                            }
                        }}>
                            Tiếp tục
                    </button>
                </div>
            </div>
        </div>
    );
}