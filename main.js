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


// Animated text
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);


// Fade animation
function triggerAnimation() {
  // すべての.fadeUpTrigger要素を取得
  var elements = document.querySelectorAll(".fadeUpTrigger");

  elements.forEach(function(elem) {
      var elemPos = elem.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      // 画面内に要素が入ったら.fadeUpクラスを追加
      if (elemPos < windowHeight && elemPos > -elem.offsetHeight) {
          elem.classList.add("fadeUp");
      } else {
      // 要素が画面外に出たら.fadeUpクラスを削除
          elem.classList.remove("fadeUp");
      }
  });
}

// スクロール時にアニメーションをトリガー
window.addEventListener("scroll", function() {
  triggerAnimation();
});


