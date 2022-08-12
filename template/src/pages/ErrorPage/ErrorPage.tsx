interface IErrorPage {
    code?: number;
    text?: string;
}

function ErrorPage({ code = 404, text = 'Page not found' }: IErrorPage) {
    return (
        <div className="flex flex-col justify-center items-center my-24 w-full">
            <h1 className="p-0 m-0 text-9xl text-transparent bg-clip-text bg-gradient-to-r from-primary-purples-acai to-primary-main">
                {code}
            </h1>
            <h2 className="mt-1 text-xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary-purples-acai to-primary-main">
                {text}
            </h2>
        </div>
    );
}

export default ErrorPage;
