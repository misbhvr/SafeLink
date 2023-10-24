const availablePages = ['AboutUs', 'Donate', 'FullMap', 'Login', 'SignUp'];

export function search(query) {
    query = query.toLowerCase().trim();

    if (query === '') {
        return [];
    }

    const exactMatch = availablePages.find((page) => page.toLowerCase() === query);
    if (exactMatch) {
        return [exactMatch];
    }

    const closeMatches = availablePages.filter((page) => page.toLowerCase().includes(query));
    return closeMatches;
}
