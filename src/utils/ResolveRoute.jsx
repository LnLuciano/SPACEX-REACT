
export const ResolveRoute = () => {
    const id = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

    return id
};

