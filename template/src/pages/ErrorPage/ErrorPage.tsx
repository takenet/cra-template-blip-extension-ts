interface IErrorPage {
    code?: number;
    text?: string;
}

function ErrorPage({ code = 404, text = 'Page not found' }: IErrorPage) {
    return (
        <div className="my-24 flex w-full flex-col items-center justify-center">
            <h1 className="m-0 bg-gradient-to-r from-primary-purples-acai to-primary-main bg-clip-text p-0 text-9xl text-transparent">
                {code}
            </h1>
            <h2 className="mt-1 bg-gradient-to-r from-primary-purples-acai to-primary-main bg-clip-text text-xl font-normal text-transparent">
                {text}
            </h2>
        </div>
    );
}

export default ErrorPage;
