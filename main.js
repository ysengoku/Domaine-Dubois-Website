// ページが読み込まれたときに実行
document.addEventListener("DOMContentLoaded", function () {
    // リンクをクリックしたときの処理
    const links = document.querySelectorAll(".navbar a[data-section]");
    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            // リンクがクリックされたとき、対応するセクションが表示されるようにスクロール
            e.preventDefault();
            const sectionId = link.getAttribute("data-section");
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // スクロールイベントを監視して、表示されているセクションに基づいてリンクにスタイルを適用
    window.addEventListener("scroll", function () {
        const sections = document.querySelectorAll("section"); // セクション要素を取得
        const scrollPosition = window.scrollY;

        sections.forEach(function (section) {
            const sectionId = section.getAttribute("id");
            const link = document.querySelector(`.navbar a[data-section="${sectionId}"]`);

            if (link) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    // セクションが表示されている場合、リンクにアンダーラインを追加
                    link.classList.add("active-link");
                } else {
                    // セクションが表示されていない場合、アンダーラインを削除
                    link.classList.remove("active-link");
                }
            }
        });
    });
});
