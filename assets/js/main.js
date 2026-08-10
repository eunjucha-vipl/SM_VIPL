/* =============================================================================
 *  VIPL Lab — 렌더링 스크립트
 *  이 파일은 data/content.js 의 내용을 읽어 각 페이지를 자동으로 그립니다.
 *  ✋ 보통은 이 파일을 수정할 필요가 없습니다. 내용은 content.js 에서 바꾸세요.
 * ========================================================================== */

(function () {
  "use strict";

  var S = window.SITE || {};

  /* ------------------------------------------------------------- 유틸리티 */
  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // 안전하게 이스케이프한 뒤 **굵게** 와 이메일 링크를 적용
  function fmt(s) {
    var out = esc(s);
    out = out.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/([\w.+-]+@[\w-]+\.[\w.-]+)/g,
      '<a href="mailto:$1">$1</a>');
    return out;
  }
  function initials(name) {
    var parts = String(name || "?").trim().split(/\s+/);
    var a = parts[0] ? parts[0][0] : "?";
    var b = parts.length > 1 ? parts[parts.length - 1][0] : "";
    return (a + b).toUpperCase();
  }
  // 사진이 있으면 <img>, 없으면 이니셜 원형 아바타
  function avatar(photo, name, cls) {
    if (photo) {
      return '<img class="avatar ' + (cls || "") + '" src="assets/img/' +
        esc(photo) + '" alt="' + esc(name) + '">';
    }
    return '<div class="avatar ' + (cls || "") + '">' + esc(initials(name)) + '</div>';
  }

  /* --------------------------------------------------- 공용 헤더 / 푸터 */
  function renderHeader(current) {
    var host = el("site-header");
    if (!host || !S.lab) return;
    var links = (S.nav || []).map(function (n) {
      var active = n.file === current ? " active" : "";
      return '<li><a class="' + active.trim() + '" href="' + esc(n.file) + '">' +
        esc(n.label) + "</a></li>";
    }).join("");

    host.innerHTML =
      '<div class="container nav">' +
        '<a class="brand" href="index.html">' +
          esc(S.lab.shortName) +
          '<span class="brand-full">' + esc(S.lab.fullName) + "</span>" +
        "</a>" +
        '<button class="nav-toggle" aria-label="Menu">☰</button>' +
        '<ul class="nav-links">' + links + "</ul>" +
      "</div>";

    var toggle = host.querySelector(".nav-toggle");
    var menu = host.querySelector(".nav-links");
    if (toggle) toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  function renderFooter() {
    var host = el("site-footer");
    if (!host || !S.lab) return;
    var year = S.lab.copyrightYear || new Date().getFullYear();
    var social = [];
    if (S.lab.googleScholar) social.push('<a href="' + esc(S.lab.googleScholar) + '">Google Scholar</a>');
    if (S.lab.github)        social.push('<a href="' + esc(S.lab.github) + '">GitHub</a>');
    if (S.lab.linkedin)      social.push('<a href="' + esc(S.lab.linkedin) + '">LinkedIn</a>');
    if (S.lab.email)         social.push('<a href="mailto:' + esc(S.lab.email) + '">Email</a>');

    host.innerHTML =
      '<div class="container">' +
        '<div class="footer-inner">' +
          "<div>" +
            '<div class="footer-brand">' + esc(S.lab.shortName) + " · " + esc(S.lab.fullName) + "</div>" +
            "<p>" + esc(S.lab.department) + "</p>" +
            "<p>" + esc(S.lab.university) + "</p>" +
          "</div>" +
          '<div class="footer-links">' + social.join("") + "</div>" +
        "</div>" +
        '<div class="footer-bottom">© ' + year + " " + esc(S.lab.fullName) +
          ". All rights reserved.</div>" +
      "</div>";
  }

  /* --------------------------------------------------------- 페이지: Home */
  function renderHome() {
    var h = S.home || {};
    var lab = S.lab || {};

    var btns = (h.heroButtons || []).map(function (b, i) {
      var cls = i === 0 ? "btn btn-primary" : "btn btn-ghost";
      return '<a class="' + cls + '" href="' + esc(b.file) + '">' + esc(b.label) + "</a>";
    }).join("");

    // 히어로 제목: \n 을 줄바꿈(<br>)으로 변환
    var heroTitle = esc(h.heroTitle).replace(/\n/g, "<br>");

    setHTML("home-hero",
            '<div class="container hero-grid">' +
            '<div class="hero-copy">' +
            '<p class="hero-kicker">Vision, Intelligence, and Perception Lab</p>' +
            '<h1>' + heroTitle + '</h1>' +
            '<p class="hero-subtitle">' + esc(h.heroSubtitle) + '</p>' +
            '<div class="hero-buttons">' + btns + '</div>' +
            '</div>' +          
            '<div class="hero-visual">' +
            '<img src="assets/img/lab_logo_v2_transparent.png" alt="VIPL — Vision, Intelligence, and Perception Lab">' +
            '</div>' +
            '</div>');

    // About 소개
    // ---------------------------------------------------------
    // Home: About
    // ---------------------------------------------------------
    var about = h.about || {};
    var focuses = about.focuses || [];
    var focusCards = focuses.map(function (item) {
      return (
        '<article class="about-focus-item">' +
          '<h3>' + esc(item.title) + '</h3>' +
          '<p>' + fmt(item.text) + '</p>' +
        '</article>'
      );
    }).join("");
    setHTML(
      "home-about",
      '<div class="container about-modern">' +    
      '<div class="section-head">' +
      '<p class="eyebrow">About the Lab</p>' +
      '<h2 class="section-title">Welcome to VIPL</h2>' +
      '</div>' +
      '<div class="about-lead">' +
      '<p>' + fmt(about.lead || "") + '</p>' +
      '</div>' +
      '<div class="about-focus-grid">' +
      focusCards +
      '</div>' +
      '<div class="about-statement">' +
      '<p>' + fmt(about.statement || "") + '</p>' +
      '</div>' +     
      '<div class="about-vision">' +
      '<span class="about-vision-label">OUR VISION</span>' +
      '<p>' + fmt(about.vision || "") + '</p>' +
      '</div>' +
      '</div>'
    );

    // Notice 공지
    
    var notice = (h.notice || []).map(function (n) {
      var body = "";
      
      if (n.list && n.list.length) {
        body = "<ul>" + n.list.map(function (li) {
          return "<li>" + fmt(li) + "</li>";
        }).join("") + "</ul>";
        
      } else if (n.body) {
        // body는 문자열 또는 문자열 배열
        var paras = Array.isArray(n.body) ? n.body : [n.body];
        body = "<p>" + paras.map(function (p) {
          return fmt(p);
        }).join("<br>") + "</p>";
      }
      
      return '<div class="notice-item"><h3>' +
        fmt(n.title) +
        '</h3>' +
        body +
        '</div>';
    }).join("");
    
    setHTML("home-notice",
            '<div class="container">' +
            '<div class="section-head"><h2 class="section-title">Notice</h2></div>' +
            '<div class="notice-list">' + notice + '</div>' +
            '</div>');

    // News 소식 — 10개까지만 보이고, 그 이상은 "More" 버튼으로 펼침
    var NEWS_LIMIT = 10;
    var newsArr = h.news || [];
    var news = newsArr.map(function (n, i) {
      var hidden = i >= NEWS_LIMIT ? " news-hidden" : "";
      return '<div class="news-row' + hidden + '"><span class="news-date">' + esc(n.date) +
        '</span><span class="news-text">' + fmt(n.text) + "</span></div>";
    }).join("");
    var moreBtn = newsArr.length > NEWS_LIMIT
      ? '<div class="more-wrap"><button type="button" class="more-btn" id="news-more" ' +
        'aria-expanded="false">More <span class="chev">▾</span></button></div>'
      : "";
    setHTML("home-news",
      '<div class="container">' +
        '<div class="section-head"><h2 class="section-title">News</h2></div>' +
        '<div class="news-list" id="news-list">' + news + "</div>" +
        moreBtn +
      "</div>");

    var moreEl = el("news-more");
    if (moreEl) {
      moreEl.addEventListener("click", function () {
        var list = el("news-list");
        var open = list.classList.toggle("expanded");
        moreEl.setAttribute("aria-expanded", open ? "true" : "false");
        moreEl.innerHTML = open
          ? 'Less <span class="chev">▴</span>'
          : 'More <span class="chev">▾</span>';
      });
    }
  }

/* ---------------------------------------------------------
   페이지: Research
   --------------------------------------------------------- */
  function renderResearch() {
    var r = S.research || {};
  
    /* Research area cards */
    var cards = (r.areas || []).map(function (a) {
      return (
        '<article class="research-card">' +
          '<div class="research-icon">' + esc(a.icon) + '</div>' +
          '<h3>' + esc(a.title) + '</h3>' +
          '<p>' + esc(a.description) + '</p>' +
        '</article>'
      );
    }).join("");
  
  
    /* Research intro */
    var intro = r.intro
      ? '<div class="research-intro">' +
          '<p class="research-intro-label">RESEARCH DIRECTIONS</p>' +
          '<h2>From perception to reasoning.</h2>' +
          '<p class="research-intro-text">' + esc(r.intro) + '</p>' +
        '</div>'
      : "";
  
  
    /* Research philosophy */
    var philosophy = (r.philosophy || []).map(function (item) {
      return (
        '<article class="research-philosophy-item">' +
          '<h3>' + esc(item.title) + '</h3>' +
          '<p>' + fmt(item.text) + '</p>' +
        '</article>'
      );
    }).join("");
  
  
    var philosophySection = philosophy
      ? '<section class="research-philosophy">' +
  
          '<div class="research-philosophy-head">' +
            '<p class="research-intro-label">OUR APPROACH</p>' +
            '<h2>Beyond visual performance.</h2>' +
          '</div>' +
  
          '<div class="research-philosophy-grid">' +
            philosophy +
          '</div>' +
  
          '<div class="research-closing">' +
            '<p>' + fmt(r.closing || "") + '</p>' +
          '</div>' +
  
        '</section>'
      : "";
  
  
    setHTML(
      "page-body",
  
      '<div class="container research-page">' +
  
        intro +
  
        '<div class="research-grid">' +
          cards +
        '</div>' +
  
        philosophySection +
  
      '</div>'
    );
  }

  /* -------------------------------------------------- 페이지: Publications */
 
  function renderPublications() {
    var pub = S.publications || {};
    var boldAuthors = pub.authorHighlightBold || [];
    var underlineAuthors = pub.authorHighlightUnderline || [];
  
    /* -------------------------------------------------------
       Author highlight
       ------------------------------------------------------- */
    function markAuthors(authors) {
      var s = esc(authors || "");
    
    
      /* Bold authors */
      boldAuthors.forEach(function (name) {
        if (!name) return;
    
        var safeName = esc(name);
        var escapedName = safeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        var re = new RegExp("(" + escapedName + ")", "g");
    
        s = s.replace(
          re,
          '<span class="pub-author-bold">$1</span>'
        );
      });
    
    
      /* Bold + underline authors */
      underlineAuthors.forEach(function (name) {
        if (!name) return;
    
        var safeName = esc(name);
        var escapedName = safeName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        var re = new RegExp("(" + escapedName + ")", "g");
    
        s = s.replace(
          re,
          '<span class="pub-author-highlight">$1</span>'
        );
      });
    
    
      return s;
    }
  
  
    /* -------------------------------------------------------
       Research area icons
       Research 페이지의 area/icon 정보 재사용
       ------------------------------------------------------- */
    var areaIcons = {};
  
    ((S.research || {}).areas || []).forEach(function (a) {
      areaIcons[a.title] = a.icon;
    });
  
  
    /* -------------------------------------------------------
       Individual publication
       ------------------------------------------------------- */
    function pubItem(p) {
  
      /* Links */
      var links = (p.links || []).map(function (l) {
        if (l.url) {
          return (
            '<a class="pub-link" href="' +
              esc(l.url) +
              '" target="_blank" rel="noopener">' +
              esc(l.label) +
            '</a>'
          );
        }
  
        return (
          '<span class="pub-link pub-link-todo">' +
            esc(l.label) +
          '</span>'
        );
      }).join("");
  
  
      /* Research areas */
      var areas = (p.areas || []).map(function (name) {
        var ic = areaIcons[name];
  
        return (
          '<span class="pub-area">' +
            (ic
              ? '<span class="pub-area-icon">' +
                  esc(ic) +
                '</span>'
              : '') +
            esc(name) +
          '</span>'
        );
      }).join("");
  
  
      /* Figure */
      var fig = p.image
        ? (
            '<img src="assets/img/' +
              esc(p.image) +
              '" alt="' +
              esc(p.title || "") +
              '" onerror="this.remove();this.parentNode.classList.add(\'is-empty\');">'
          )
        : "";
  
  
      /* Publication item */
      return (
        '<article class="pub' + (p.image ? '' : ' pub-no-figure') + '">' +
  
          '<div class="pub-main">' +
  
            (areas
              ? '<div class="pub-areas">' +
                  areas +
                '</div>'
              : '') +
  
            '<h4 class="pub-title">' +
              esc(p.title || "") +
            '</h4>' +
  
            '<div class="pub-authors">' +
              markAuthors(p.authors || "") +
            '</div>' +
  
            (p.venue
              ? '<div class="pub-venue">' +
                  esc(p.venue) +
                '</div>'
              : '') +
  
            (p.note
              ? '<div class="pub-highlight">' +
                  esc(p.note) +
                '</div>'
              : '') +
  
            (links
              ? '<div class="pub-links">' +
                  links +
                '</div>'
              : '') +
  
          '</div>' +
        (p.image
         ? '<div class="pub-figure">' +
         fig +
         '</div>'
         : '') +
  
        '</article>'
      );
    }
  
  
    /* -------------------------------------------------------
       Full publication list
       content.js에서는 year별로 관리하지만
       화면에서는 하나의 전체 목록으로 표시
       ------------------------------------------------------- */
    var allItems = [];
  
    (pub.years || []).forEach(function (yr) {
      (yr.items || []).forEach(function (it) {
        allItems.push(it);
      });
    });
  
    var list =
      '<div class="pub-list">' +
        allItems.map(pubItem).join("") +
      '</div>';
  
  
    /* -------------------------------------------------------
       Intro
       Research 페이지와 같은 visual hierarchy
       단, publications 전용 pub-* class 사용
       ------------------------------------------------------- */
    var intro =
      '<div class="pub-intro">' +
  
        '<p class="pub-intro-label">' +
          'PUBLICATION RECORD' +
        '</p>' +
  
        '<h2>' +
          'Research contributions across visual intelligence.' +
        '</h2>' +
  
        (pub.intro
          ? '<p class="pub-intro-text">' +
              esc(pub.intro) +
            '</p>'
          : '') +
  
      '</div>';
  
  
    /* -------------------------------------------------------
       Footnote
       ------------------------------------------------------- */
    var note = pub.note
      ? '<div class="pub-note">' +
          esc(pub.note) +
        '</div>'
      : '';
  
  
    /* -------------------------------------------------------
       Render
       ------------------------------------------------------- */
    setHTML(
      "page-body",
  
      '<div class="container pub-page">' + intro + note + list + '</div>'
    );
  }

  

  /* --------------------------------------------------------- 페이지: People */
  function renderPeople() {
    var pe = S.people || {};
    var out = '<div class="container">';

    // 지도교수 — 카드 전체를 클릭하면 상세 페이지(professor.html)로 이동
  

    var p = pe.professor;
    if (p) {
      var tags = (p.interests || []).map(function (t) {
        return '<span class="tag">' + esc(t) + '</span>';
      }).join('');
      
    var shortBio = p.summary ||
      (Array.isArray(p.bio) ? (p.bio[0] || '') : (p.bio || ''));
  
  
    out +=
      '<div class="people-group people-pi-group">' +
  
        '<div class="people-intro">' +
          '<p class="people-eyebrow">FACULTY</p>' +
          '<h2>Principal Investigator</h2>' +
        '</div>' +
  
        '<div class="prof-card">' +
  
          avatar(p.photo, p.name) +
  
          '<div>' +
  
            '<h3>' +
              esc(p.name) +
              (p.koreanName
                ? ' <span class="prof-kr">' + esc(p.koreanName) + '</span>'
                : '') +
            '</h3>' +
  
            '<p class="prof-title">' +
              esc(p.title || '') +
            '</p>' +
  
            '<p class="prof-meta">' +
              esc((S.lab || {}).department || '') +
              ' · ' +
              esc((S.lab || {}).university || '') +
            '</p>' +

            '<p class="prof-contact">' +
              (p.email ? '<span>✉️ ' + esc(p.email) + "</span>" : "") +
              (p.office ? '<span>🚪 ' + esc(p.office) + "</span>" : "") +
            "</p>" +
  
            '<p class="prof-bio">' +
              esc(shortBio) +
            '</p>' +
  
            (tags
              ? '<div class="prof-interests">' +
                  '<span class="prof-interests-label">Research Interests</span>' +
                  '<div class="tags">' +
                    tags +
                  '</div>' +
                '</div>'
              : '') +
  
            '<a class="view-profile" href="professor.html">' +
              'View full profile ' +
              '<span class="view-profile-arrow">&rarr;</span>' +
            '</a>' +
  
          '</div>' +
  
        '</div>' +
  
      '</div>';
  }

    // 현재 재직/재학 구성원 그룹
  
    var activeGroups = (pe.groups || []).filter(function (g) {
      return g.members && g.members.length;
    });
    if (activeGroups.length) {
      out +=
        '<div class="members-intro">' +
        '<p class="members-eyebrow">CURRENT MEMBERS</p>' +
        '</div>';
    }
    activeGroups.forEach(function (g) {
      var cards = g.members.map(function (m) {
        return (
          '<div class="person">' +
      
            avatar(m.photo, m.name) +
      
            '<div class="name">' +
              esc(m.name) +
            '</div>' +
      
            (m.email
              ? '<div class="person-email">' +
                  esc(m.email) +
                '</div>'
              : '') +
      
            (m.education
              ? '<div class="person-education">' +
                  esc(m.education) +
                '</div>'
              : '') +
      
          '</div>'
        );
      }).join("");
      
  out +=
    '<div class="people-group member-group">' +
      '<h3 class="member-group-title">' + esc(g.title) + '</h3>' +
      '<div class="people-grid">' +
        cards +
      '</div>' +
    '</div>';
});
    

    // 동문(Alumni)은 별도 세부 페이지에서 — 안내 배너
    if (pe.alumni && pe.alumni.length) {
      out += '<a class="alumni-cta" href="alumni.html">' +
          '<div><span class="alumni-cta-eyebrow">Alumni</span>' +
          '<span class="alumni-cta-title">Meet our graduates</span></div>' +
          '<span class="alumni-cta-arrow">&rarr;</span>' +
        "</a>";
    }

    out += "</div>";
    setHTML("page-body", out);
  }

  /* ----------------------------------------------- 페이지: Professor(상세) */
  function renderProfessor() {
    var p = (S.people || {}).professor;
    var lab = S.lab || {};
    if (!p) { setHTML("page-body", '<div class="container"><div class="empty-hint">No profile.</div></div>'); return; }

    var tags = (p.interests || []).map(function (t) {
      return '<span class="tag">' + esc(t) + "</span>";
    }).join("");
    var links = (p.links || []).filter(function (l) { return l.url; }).map(function (l) {
      return '<a class="btn-link" href="' + esc(l.url) + '" target="_blank" rel="noopener">' +
        esc(l.label) + "</a>";
    });
   // if (p.email) links.unshift('<a class="btn-link" href="mailto:' + esc(p.email) + '">Email</a>');

    var bio = (Array.isArray(p.bio) ? p.bio : [p.bio]).filter(Boolean)
      .map(function (par) { return "<p>" + esc(par) + "</p>"; }).join("");

    function listBlock(title, rows) {
      if (!rows) return "";
      return '<div class="cv-block"><h2 class="cv-title">' + title + "</h2>" + rows + "</div>";
    }

    // 기간 표기: "–" / "-" 를 기준으로 줄을 나눠 정렬을 통일 (시작날짜 – / 끝날짜)
    function fmtPeriod(s) {
      var parts = String(s == null ? "" : s).split(/\s*[–—-]\s*/);
      return parts.map(function (x) { return esc(x); }).join(" &ndash;<br>");
    }
    
    var edu = (p.education || []).length
      ? (p.education || []).map(function (e) {
        var details = "";      
        if (e.advisor) {
          details +='<span class="cv-education-detail">' +
            '<span class="cv-detail-label">Advisor:</span> ' +
            esc(e.advisor) +
            '</span>';
        }
        if (e.honors) {
          details +=
            '<span class="cv-education-detail">' +
            '<span class="cv-detail-label">Honors:</span> ' +
            '<em>' + esc(e.honors) + '</em>' +
            '</span>';
        }
        return (
          '<div class="cv-row">' +         
          '<span class="cv-year">' +
            fmtPeriod(e.year || "") +
          '</span>' +
          '<span class="cv-main">' +
          '<strong>' +
          esc(e.degree || "") +
          '</strong>' +          
            (e.org
              ? '<span class="cv-org">' +
                  esc(e.org) +
                '</span>'
              : '') +
            details +
          '</span>' +
        '</div>'
        );
      }).join("")
      : "";
    var exp = (p.experience || []).length
      ? (p.experience || []).map(function (e) {
          return '<div class="cv-row"><span class="cv-year">' + fmtPeriod(e.period || "") +
            '</span><span class="cv-main"><strong>' + esc(e.role || "") + "</strong>" +
            (e.org ? '<span class="cv-org">' + esc(e.org) + "</span>" : "") + "</span></div>";
        }).join("")
      : "";
    var awards = (p.awards || []).length
      ? "<ul class=\"cv-awards\">" + (p.awards || []).map(function (a) {
          return "<li>" + esc(a) + "</li>";
        }).join("") + "</ul>"
      : "";

    // Academic Services — 역할(role) + 세부(detail)
    var services = (p.academicServices || []).length
      ? (p.academicServices || []).map(function (s) {
          return '<div class="cv-service"><div class="cv-service-role">' + esc(s.role || "") + "</div>" +
            (s.detail ? '<div class="cv-service-detail">' + esc(s.detail) + "</div>" : "") + "</div>";
        }).join("")
      : "";

    // Academic Activities — Experience 와 동일한 cv-row 레이아웃 (과한 강조 없이)
    var activities = (p.academicActivities || []).length
      ? (p.academicActivities || []).map(function (a) {
          return '<div class="cv-row"><span class="cv-year">' + fmtPeriod(a.period || "") +
            '</span><span class="cv-main cv-activity">' + esc(a.text || "") + "</span></div>";
        }).join("")
      : "";

    // Invited Talks — 기간(period) + 제목(title/행사) + 세부(강연명).
    // 10개까지만 기본 표시하고, 그 이상은 "More" 버튼으로 펼침 (홈 News 방식).
    var TALK_LIMIT = 10;
    var talksArr = p.invitedTalks || [];
    var talksItems = talksArr.map(function (t, i) {
      var hidden = i >= TALK_LIMIT ? " talk-hidden" : "";
      return '<div class="cv-talk' + hidden + '"><div class="cv-talk-head">' +
        (t.period ? '<span class="cv-talk-period">[' + esc(t.period) + "]</span>" : "") +
        '<span class="cv-talk-title">' + esc(t.title || "") + "</span></div>" +
        (t.detail ? '<div class="cv-talk-detail">' + esc(t.detail) + "</div>" : "") +
      "</div>";
    }).join("");
    var talksMore = talksArr.length > TALK_LIMIT
      ? '<div class="more-wrap"><button type="button" class="more-btn" id="talks-more" ' +
        'aria-expanded="false">More <span class="chev">▾</span></button></div>'
      : "";
    var talks = talksArr.length
      ? '<div class="cv-talk-list" id="talks-list">' + talksItems + "</div>" + talksMore
      : "";

    var out =
      '<div class="container">' +
        '<a class="back-link" href="people.html">&larr; Back to People</a>' +
        '<div class="prof-detail">' +
          '<div class="prof-detail-side">' +
            avatar(p.photo, p.name, "prof-detail-avatar") +
            (links.length ? '<div class="prof-detail-links">' + links.join("") + "</div>" : "") +
          "</div>" +
          '<div class="prof-detail-main">' +
            "<h1>" + esc(p.name) +
              (p.koreanName ? ' <span class="prof-kr">' + esc(p.koreanName) + "</span>" : "") +
            "</h1>" +
            '<p class="prof-title">' + esc(p.title) + "</p>" +
            '<p class="prof-meta">' + esc(lab.department || "") + " · " + esc(lab.university || "") + "</p>" +
            '<div class="prof-contact">' +
              (p.email ? '<span>✉️ ' + esc(p.email) + "</span>" : "") +
              (p.office ? '<span>🚪 ' + esc(p.office) + "</span>" : "") +
            "</div>" +
            (tags
             ? '<div class="prof-interests">' +
             '<span class="prof-interests-label">Research Interests</span>' +
             '<div class="tags">' + tags + '</div>' +
             '</div>'
             : '') +
            '<div class="prose prof-detail-bio">' + bio + "</div>" +
            listBlock("Education", edu) +
            listBlock("Experience", exp) +
            listBlock("Academic Services", services) +
            listBlock("Academic Activities", activities) +
            listBlock("Invited Talks", talks) +
            listBlock("Awards & Honors", awards) +
          "</div>" +
        "</div>" +
      "</div>";
    setHTML("page-body", out);

    // Invited Talks 의 More/Less 토글 (홈 News 와 동일한 동작)
    var talksMoreEl = el("talks-more");
    if (talksMoreEl) {
      talksMoreEl.addEventListener("click", function () {
        var list = el("talks-list");
        var open = list.classList.toggle("expanded");
        talksMoreEl.setAttribute("aria-expanded", open ? "true" : "false");
        talksMoreEl.innerHTML = open
          ? 'Less <span class="chev">▴</span>'
          : 'More <span class="chev">▾</span>';
      });
    }
  }

  /* -------------------------------------------------- 페이지: Alumni(상세) */
  function renderAlumni() {
    var alumni = (S.people || {}).alumni || [];
    var back = '<a class="back-link" href="people.html">&larr; Back to People</a>';
    if (!alumni.length) {
      setHTML("page-body", '<div class="container">' + back +
        '<div class="empty-hint">No alumni yet.</div></div>');
      return;
    }
    var cards = alumni.map(function (a) {
      var deg = (a.degree || "").toUpperCase();
      var degClass = deg.indexOf("PH") === 0 ? "phd" : "ms";
      var badge = a.degree
        ? '<span class="alum-badge ' + degClass + '">' + esc(a.degree) +
          (a.year ? " · " + esc(a.year) : "") + "</span>"
        : "";
      return '<div class="alum-card">' +
        avatar(a.photo, a.name, "alum-avatar") +
        '<div class="alum-name">' + esc(a.name) + "</div>" +
        badge +
        (a.position ? '<div class="alum-pos">' + esc(a.position) + "</div>" : "") +
        (a.note ? '<div class="alum-note">' + esc(a.note) + "</div>" : "") +
      "</div>";
    }).join("");
    setHTML("page-body",
      '<div class="container">' + back +
        '<div class="alum-grid">' + cards + "</div>" +
      "</div>");
  }

  /* ------------------------------------------------------- 페이지: Teaching */
  function renderTeaching() {
    var t = S.teaching || {};
    var rows = (t.courses || []).map(function (c) {
      var level = c.level ? '<span class="course-level">' + esc(c.level) + "</span>" : "";
      var term = c.term ? '<span class="course-term">' + esc(c.term) + "</span>" : "";
      return '<div class="course">' +
        '<span class="course-code">' + esc(c.code) + "</span>" +
        '<p class="course-title">' + esc(c.title) + term + level + "</p>" +
        '<p class="course-desc">' + esc(c.description) + "</p>" +
      "</div>";
    }).join("");
    var intro = t.intro ? '<div class="section-head"><p>' + esc(t.intro) + "</p></div>" : "";
    setHTML("page-body", '<div class="container">' + intro + rows + "</div>");
  }

  /* --------------------------------------------------------- 페이지: Photos */
  function renderPhotos() {
    var ph = S.photos || {};
  
    var cells = (ph.items || []).map(function (p, index) {
  
      var images = Array.isArray(p.src)
        ? p.src
        : (p.src ? [p.src] : []);
  
      var media;
  
      if (images.length) {
  
        var slides = images.map(function (src) {
          return (
            '<div class="photo-slide">' +
              '<img src="assets/img/' + esc(src) + '" ' +
                   'alt="' + esc(p.caption || "") + '">' +
            '</div>'
          );
        }).join("");
  
        media =
          '<div class="photo-carousel">' +
  
            '<div class="photo-slider" data-slider="' + index + '">' +
              slides +
            '</div>' +
  
            (images.length > 1
              ? '<button class="photo-nav photo-prev" type="button" aria-label="Previous photo">‹</button>' +
                '<button class="photo-nav photo-next" type="button" aria-label="Next photo">›</button>' +
                '<div class="photo-count">1 / ' + images.length + '</div>'
              : '') +
  
          '</div>';
  
      } else {
        media = '<div class="placeholder">📷</div>';
      }
  
  
      var cap = p.caption
        ? '<div class="caption">' + esc(p.caption) + '</div>'
        : '';
  
  
      return (
        '<div class="photo">' +
          media +
          cap +
        '</div>'
      );
  
    }).join("");
  
  
    var intro = ph.intro
      ? '<div class="section-head"><p>' + esc(ph.intro) + '</p></div>'
      : '';
  
  
    setHTML(
      "page-body",
      '<div class="container">' +
        intro +
        '<div class="photo-grid">' +
          cells +
        '</div>' +
      '</div>'
    );
  
  
    /* -------------------------------------------------------
       Photo carousel controls
       ------------------------------------------------------- */
  
    document.querySelectorAll(".photo-carousel").forEach(function (carousel) {
  
      var slider = carousel.querySelector(".photo-slider");
      var prev = carousel.querySelector(".photo-prev");
      var next = carousel.querySelector(".photo-next");
      var count = carousel.querySelector(".photo-count");
  
      if (!slider || !prev || !next) return;
  
      var slides = slider.querySelectorAll(".photo-slide");
      var current = 0;
  
  
      function goTo(index) {
  
        if (index < 0) {
          index = slides.length - 1;
        }
  
        if (index >= slides.length) {
          index = 0;
        }
  
        current = index;
  
        slider.scrollTo({
          left: slider.clientWidth * current,
          behavior: "smooth"
        });
  
        if (count) {
          count.textContent =
            (current + 1) + " / " + slides.length;
        }
      }
  
  
      prev.addEventListener("click", function () {
        goTo(current - 1);
      });
  
  
      next.addEventListener("click", function () {
        goTo(current + 1);
      });
  
  
      /* swipe 후 현재 번호 업데이트 */
      slider.addEventListener("scroll", function () {
  
        if (!slider.clientWidth) return;
  
        var newIndex = Math.round(
          slider.scrollLeft / slider.clientWidth
        );
  
        if (newIndex !== current) {
          current = newIndex;
  
          if (count) {
            count.textContent =
              (current + 1) + " / " + slides.length;
          }
        }
  
      });
  
    });
  }
  
/* -------------------------------------------------------- 페이지: Contact */
function renderContact() {
  var c = S.contact || {};
  var rows = [];


  /* -------------------------------------------------------
     Contact information row
     ------------------------------------------------------- */
  function row(icon, key, value) {
    return (
      '<li>' +
        '<span class="ci">' + icon + '</span>' +
        '<span>' +
          '<span class="ck">' + esc(key) + '</span>' +
          '<span class="cv">' + value + '</span>' +
        '</span>' +
      '</li>'
    );
  }


  /* -------------------------------------------------------
     Paragraph renderer
     string 또는 array 모두 지원
     ------------------------------------------------------- */
  function renderParagraphs(value, className) {
    if (!value) return "";

    var paragraphs = Array.isArray(value)
      ? value
      : [value];

    return paragraphs.map(function (text) {
      return (
        '<p class="' + className + '">' +
          esc(text) +
        '</p>'
      );
    }).join("");
  }


  /* -------------------------------------------------------
     Contact information
     ------------------------------------------------------- */
  if (c.email) {
    rows.push(
      row(
        "✉️",
        "Email",
        '<a href="mailto:' + esc(c.email) + '">' +
          esc(c.email) +
        '</a>'
      )
    );
  }

  if (c.phone) {
    rows.push(
      row("📞", "Phone", esc(c.phone))
    );
  }

  if (c.office) {
    rows.push(
      row("🚪", "Office", esc(c.office))
    );
  }

  if (c.address) {
    rows.push(
      row("📍", "Address", esc(c.address))
    );
  }


  /* -------------------------------------------------------
     Contact & Collaboration
     ------------------------------------------------------- */
  var contactSection =
    '<section class="contact-intro">' +

      '<p class="contact-intro-label">' +
        'CONTACT & COLLABORATION' +
      '</p>' +

      '<h2>' +
        'Explore opportunities to work together.' +
      '</h2>' +

      '<div class="contact-grid">' +

        '<div class="contact-copy">' +
          renderParagraphs(
            c.intro,
            "contact-intro-text"
          ) +
        '</div>' +

        '<div>' +
          '<ul class="contact-list">' +
            rows.join("") +
          '</ul>' +
        '</div>' +

      '</div>' +

    '</section>';


  /* -------------------------------------------------------
     Join VIPL
     ------------------------------------------------------- */
  var joinSection = c.joinNote
    ? (
        '<section class="contact-join">' +

          '<div class="contact-join-head">' +

            '<p class="contact-intro-label">' +
              'JOIN VIPL' +
            '</p>' +

            '<h2>' +
              'Grow with us through research.' +
            '</h2>' +

          '</div>' +

          '<div class="contact-join-copy">' +
            renderParagraphs(
              c.joinNote,
              "contact-join-text"
            ) +
          '</div>' +

        '</section>'
      )
    : "";


  /* -------------------------------------------------------
     Render
     ------------------------------------------------------- */
  setHTML(
    "page-body",
    '<div class="container contact-page">' +
      contactSection +
      joinSection +
    '</div>'
  );
}
  

  
  /* ---------------------------------------------------------------- 헬퍼 */
  function setHTML(id, html) { var n = el(id); if (n) n.innerHTML = html; }

  // 페이지 상단 배너(내부 페이지용) 채우기
  function renderPageHero() {
    var host = el("page-hero");
    if (!host) return;
    var title = host.getAttribute("data-title") || "";
    var sub = host.getAttribute("data-subtitle") || "";
    // 데이터에서 소개 문구를 끌어올 수도 있음
    host.innerHTML = '<div class="container"><h1>' + esc(title) + "</h1>" +
      (sub ? "<p>" + esc(sub) + "</p>" : "") + "</div>";
  }

  /* ------------------------------------------------------------- 부트스트랩 */
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page") || "index.html";
    // 세부 페이지(professor/alumni)는 상단 메뉴에서 People 을 강조
    var navActive = document.body.getAttribute("data-nav") || page;
    renderHeader(navActive);
    renderFooter();
    renderPageHero();

    switch (page) {
      case "index.html":        renderHome(); break;
      case "research.html":     renderResearch(); break;
      case "publications.html": renderPublications(); break;
      case "people.html":       renderPeople(); break;
      case "professor.html":    renderProfessor(); break;
      case "alumni.html":       renderAlumni(); break;
      case "teaching.html":     renderTeaching(); break;
      case "photos.html":       renderPhotos(); break;
      case "contact.html":      renderContact(); break;
    }
  });
})();
