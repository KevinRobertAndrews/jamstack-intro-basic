const listRepos = async (username) => {
    const repos = await fetch(
        `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
    )
        .then((res) => res.json())
        .catch((err) => console.error(err));

    const markup = repos.map(
        (repo) => `
    <li>
        <a href="${repo.html_url}">${repo.name}</a>
        (STAR ${repo.stargazers_count})
    </li>`
    );

    const content = document.getElementById('content');
    content.innerHTML = `<ul>${markup}</ul>`;
};
listRepos('jlengstorf');
