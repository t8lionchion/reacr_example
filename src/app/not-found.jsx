import { Hero } from "@/components/Hero";
const NotFoundPage = () => {

    return (
        <>
            <Hero title={'Clean blog'} bg={'home-bg'} />
            <div className="row justify-content-center"
                style={{
                    margin: "100px auto",
                }}
            >
                <div className="col-4">
                    <h1>404 - 找不到頁面</h1>
                    <p style={{ fontStyle: "italic", color: "#888" }}>—— 宋代 李清照</p>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;