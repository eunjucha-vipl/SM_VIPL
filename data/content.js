/* =============================================================================
 *  VIPL 연구실 홈페이지 — 콘텐츠 데이터 파일
 * =============================================================================
 */

window.SITE = {

  /* ---------------------------------------------------------------------------
   * 1. 연구실 기본 정보 — 모든 페이지의 헤더/푸터/제목에 사용됩니다.
   * ------------------------------------------------------------------------- */
  lab: {
    shortName: "VIPL",
    fullName: "Vision, Intelligence, and Perception Lab",   
    tagline: "Advancing visual intelligence through AI and computer vision",
    university: "Sookmyung Women's University",
    department: "Department of Electrical Engineering",
    email: "eunju.cha@sookmyung.ac.kr",
    googleScholar: "https://scholar.google.com/citations?user=mqNGNqEAAAAJ&hl=ko&oi=ao",                            
    linkedin: "https://kr.linkedin.com/in/eunju-cha-b5b994127",
    logo: "lab_logo_v2_transparent.png",
    // 저작권(© footer) 연도
    copyrightYear: "2022"
  },

  /* ---------------------------------------------------------------------------
   * 2. 상단 메뉴(내비게이션) — 페이지 순서와 이름을 정합니다.
   *    file 은 실제 html 파일 이름과 일치해야 합니다.
   * ------------------------------------------------------------------------- */
  nav: [
    { label: "Home",         file: "index.html" },
    { label: "People",       file: "people.html" },
    { label: "Research",     file: "research.html" },
    { label: "Publications", file: "publications.html" },
    { label: "Teaching",     file: "teaching.html" },
    { label: "Photos",       file: "photos.html" },
    { label: "Contact",      file: "contact.html" }
  ],

  /* ---------------------------------------------------------------------------
   * 3. 홈(메인) 페이지
   * ------------------------------------------------------------------------- */
  home: {
    // 상단 대형 배너(히어로) 문구
    //   줄을 나누고 싶은 곳에 \n 을 넣으면 그 자리에서 줄바꿈됩니다.
    heroTitle: "Vision. \nIntelligence. \nPerception.",
    heroSubtitle:
      "We build intelligent visual systems that perceive, understand, reconstruct, and generate the visual world.",
    heroButtons: [
      { label: "Our Research", file: "research.html" },
      { label: "Join Us",      file: "contact.html" }
    ],

    // 연구실 소개 (About the Lab 섹션에 표시됩니다)


    about: {
      lead:
        "At the **Vision, Intelligence, and Perception Lab (VIPL)**, we develop intelligent visual systems that perceive, understand, reconstruct, and generate the visual world.",
      focuses: [
        {
          title: "Visual Intelligence",
          text: "We advance learning-based methods for image and video understanding, enhancement, restoration, generation, and 3D visual data."
        },
        {
          title: "Explainable & Trustworthy AI",
          text: "We design visual AI that is not only accurate, but also explainable, interpretable, robust, and trustworthy."
        },
        {
          title: "Real-world Impact",
          text: "We connect fundamental advances with practical and scalable AI solutions for science, industry, and everyday life."
        }
      ],
      
      statement:
        "We develop intelligent visual systems that **perceive, understand, reconstruct, and generate** the visual world in reliable and meaningful ways.",
      
      vision: "**To make the invisible visible, and the complex simple.**"
    },

    // -------------------------------------------------------------------------
    // Notice(공지) 섹션
    //   각 블록은 title(제목)과 body(문단) 또는 list(목록)를 가집니다.
    //   body 는 "문단 하나"(문자열) 또는 "여러 문단"(문자열 배열) 둘 다 됩니다.
    //   본문에 이메일 주소를 쓰면 자동으로 클릭 가능한 링크가 됩니다.
    // -------------------------------------------------------------------------
    notice: [
      {
        title: "Graduate Students · 대학원생 모집",
        body: [
          "인공지능 기반의 다양한 영상 처리 연구에 관심 있는 대학원생(석사·박사)을 모집합니다.",
          "We are recruiting M.S. and Ph.D. students interested in AI-based image and video processing research.",
          "Contact: eunju.cha@sookmyung.ac.kr"
        ]
      },
      {
        title: "Undergraduate Students · 학부연구생 모집",
        body: [
          "인공지능 기반의 다양한 영상 처리 연구에 관심 있는 학부 연구생을 모집합니다.",
          "We also welcome motivated undergraduate researchers interested in the same areas.",
          "Contact: eunju.cha@sookmyung.ac.kr"
        ]
      },
      {
        title: "Research Areas · 주요 연구분야",
        list: [
          "Deep Learning for Vision",
          "Generative Models",
          "Medical Image Analysis",
          "Visual Understanding & Reasoning"
        ]
      }
    ],

    // -------------------------------------------------------------------------
    // News 섹션 — 최신 소식을 맨 위에 두세요.
    //   **별표 두 개** 로 감싸면 굵게 표시됩니다.  예: **CVPR 2026**
    // -------------------------------------------------------------------------
    news: [
      { date: "06/18/2026", text: "One paper has been accepted to **ECCV 2026**!" },
      { date: "06/05/2026", text: "**Soobin** and **Seohyeon** won AI SeoulTech Scholarship! Congrats! 👏" },
      { date: "05/01/2026", text: "One paper has been accepted to **ICML 2026**!" },
      { date: "02/21/2026", text: "One paper has been accepted to **CVPR 2026**!" },
      { date: "01/26/2026", text: "One paper has been accepted to **ICLR 2026**!" },
      { date: "12/26/2025", text: "One paper has been accepted to **Advanced Science** (IF: 14.1)!" },
      { date: "06/26/2025", text: "One paper has been accepted to **ICCV 2025**!" },
      { date: "06/17/2025", text: "**Soobin** and **Seohyeon** won AI SeoulTech Scholarship! Congrats! 👏" },
      { date: "03/24/2025", text: "One paper has been accepted to **IEEE Access**!" },
      { date: "03/01/2025", text: "**Soobin** and **Seohyeon** joined VIPL! Welcome! 🎉" },
      { date: "02/27/2025", text: "One paper has been accepted to **CVPR 2025**!" },
      { date: "09/16/2024", text: "One paper has been accepted to **Image and Vision Computing**!" },
      { date: "03/01/2024", text: "**Nabin** joined VIPL! Welcome! 🎉" },
      { date: "09/01/2022", text: "**Eunju Cha** joined Sookmyung Women's University!" }
    ]
  },

  /* ---------------------------------------------------------------------------
   * 4. Research 페이지 — 연구 분야 카드
   * ------------------------------------------------------------------------- */
  research: {
    intro:
      "Our research spans the full pipeline of visual intelligence: from " +
      "low-level image understanding to high-level reasoning. Below are our " +
      "core research directions.",
    areas: [
      {
        icon: "🧠",
        title: "Deep Learning for Vision",
        description:
          "Designing neural network architectures and training methods for " +
          "image classification, detection, and segmentation."
      },
       {
        icon: "🎨",
        title: "Generative Models",
        description:
          "Image generation, restoration, and translation using generative models."
      },
      {
        icon: "🩺",
        title: "Medical Image Analysis",
        description:
          "AI-assisted diagnosis, image reconstruction, and analysis of " +
          "medical imaging modalities such as MRI, CT, and pathology."
      },
      {
        icon: "🛡️",
        title: "Trustworthy & Robust AI",
        description:
          "Improving the reliability, fairness, and robustness of vision " +
          "models against distribution shift and adversarial conditions."
      },
      {
        icon: "⚡",
        title: "Efficient AI",
        description:
          "Model compression, quantization, and lightweight architectures " +
          "for on-device and real-time visual inference."
      },
      {
        icon: "🔎",
        title: "Visual Understanding & Reasoning",
        description:
          "Vision-language models, multimodal learning, and scene " +
          "understanding for higher-level reasoning tasks."
      }
    ],
    
    philosophy: [
      {
        title: "Visual Intelligence",
        text: "At the **Vision, Intelligence, and Perception Lab (VIPL)** at Sookmyung Women's University, we conduct fundamental and applied research at the intersection of computer vision, artificial intelligence, and visual perception. " +
          "Our goal is to develop intelligent visual systems that can not only process visual information, but also understand, reconstruct, and generate the visual world in meaningful ways. " +
          "Our research spans a broad range of topics in deep learning and visual AI, including **image and video understanding, enhancement, restoration, generation, and the analysis of 2D images and 3D data**."
      },
      {
        title: "Explainability & Trust",
        text:"Beyond technical performance, we are deeply committed to **explainability, interpretability, and trustworthiness**. " +
          "As AI systems become increasingly integrated into scientific, industrial, and everyday decision-making, we believe it is essential to understand not only what these systems predict, but also why they make such predictions. " +
          "To this end, we seek to develop intelligent algorithms that bridge data-driven learning and human-understandable reasoning."
      },
      {
        title: "From Research to Real-world Impact",
        text: "Our research extends beyond algorithmic advances to address a broader question: **How can visual intelligence become truly useful in the real world?** " +
          "We pursue practical, sustainable, and scalable AI solutions that translate advances in vision and perception into meaningful impact. " +
          "By connecting fundamental research with real-world challenges, we aim to make intelligent visual technologies more accessible, dependable, and impactful across everyday life, science, and diverse industrial applications."
      }
    ],
    closing:
      "At VIPL, we envision AI systems that do more than recognize patterns. We seek to **build systems that perceive, understand, and communicate the visual world intelligently**."
  },

  /* ---------------------------------------------------------------------------
   * 5. Publications 페이지
   *    연도(year) 별로 그룹화됩니다. 최신 연도를 위에 두세요.
   *    - authors: 저자 (본인 이름을 **강조**하려면 별표 없이 그냥 이름 그대로,
   *      자동 강조는 아래 lab.authorHighlight 로 설정합니다.)
   *    - venue: 학회/저널 이름
   *    - links: 논문/코드 링크 (없으면 빈 배열 [])
   * ------------------------------------------------------------------------- */
  publications: {
    authorHighlightBold: ["S. Park", "S. Yoo", " N. Jeong"],   
    authorHighlightUnderline: ["E. Cha"],
    
    // 저자 표기 범례 (제목 위에 표시)
    note: "* Equal contribution  ·  † Corresponding author",
    intro:
      "Our work spans computer vision, generative modeling, medical image analysis, and trustworthy AI.",

    years: [
      {
        year: "2026",
        items: [
          {
            title: "SA-V2V: Training-Free Subject-Aware Video-to-Video Personalization",
            authors: "S. Park, S. Yoo, J. Kim, S. Kim, K. H. Jin†, and E. Cha†",
            venue: "European Conference on Computer Vision (ECCV), 2026",
            areas: ["Generative Models", "Visual Understanding & Reasoning", "Efficient AI"],
            image: "pub/sav2v.png",
            links: []
          },
          {
            title: "MCLC: Measurement-Consistent Langevin Corrector for Stabilizing " +
                   "Latent Diffusion Inverse Problem Solvers",
            authors: "H. Lee, S. Lim, E. Cha†, and T. H. Oh†",
            venue: "International Conference on Machine Learning (ICML), 2026",
            areas: ["Deep Learning for Vision", "Generative Models"],
            image: "pub/mclc.png",
            links: [
              { label: "paper", url: "https://hyoseok1223.github.io/mclc/assets/19665_Measurement_Consistent.pdf" },
              { label: "project", url: "https://hyoseok1223.github.io/mclc/"}
            ]
          },
          {
            title: "Semantic Alignment for Pose-Invariant Identity Preserving Diffusion",
            authors: "J. Kim, S. Kim, S. Park, E. Cha†, and K. H. Jin†",
            venue: "Computer Vision and Pattern Recognition (CVPR), 2026",
            areas: ["Generative Models", "Deep Learning for Vision"],
            image: "pub/seal.png",
            links: [
              { label: "project", url: "https://jwonkm.github.io/SeAl/" }
            ]
          },
          {
            title: "A Noise is Worth Diffusion Guidance",
            authors: "D. Ahn*, J. Kang*, S. Lee, J. Min, W. Jang, M. Kim, H. Cho, " +
                     "S. Paul, S. Kim, E. Cha†, K. H. Jin†, and S. Kim†",
            venue: "International Conference on Learning Representations (ICLR), 2026",
            areas: ["Generative Models", "Efficient AI"],
            image: "pub/noiserefine.png",
            links: [
              { label: "paper",   url: "https://arxiv.org/abs/2412.03895" },
              { label: "project", url: "https://cvlab-kaist.github.io/NoiseRefine/" }
            ]
          }
        ]
      },
      {
        year: "2025",
        items: [
          {
            title: "Unpaired Learning-Enabled Nanotube Identification from AFM Images",
            authors: "S. Na*, S. Park*, Y. Jung, J. Park, J. Hong, J. Lee, A. Kim, " +
                     "B. Kim, G. Cho†, E. Cha†, and S. H. Song†",
            venue: "Advanced Science, 13.12 (2026): e12504.",
            areas: ["Deep Learning for Vision", "Visual Understanding & Reasoning"],
            image: "pub/unpaired.png",
            links: [
              { label: "paper", url: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/advs.202512504" }
            ]
          },
          {
            title: "Dual Recursive Feedback on Generation and Appearance Latents " +
                   "for Pose-Robust Text-to-Image Diffusion",
            authors: "J. Kim, P. Kim, S. Kim, S. Park, E. Cha†, and K. H. Jin†",
            venue: "International Conference on Computer Vision (ICCV), 2025",
            areas: ["Generative Models", "Deep Learning for Vision"],
            image: "pub/drf.png",
            links: [
               { label: "paper", url: "https://arxiv.org/abs/2508.09575" },
              { label: "project", url: "https://jwonkm.github.io/DRF/" }
            ]
          },
          {
            title: "Identity-preserving Distillation Sampling by Fixed-Point Iterator",
            authors: "S. Kim, J. Kim, S. Park, D. Ahn, J. Kang, S. Kim†, K. H. Jin†, and E. Cha†",
            venue: "Computer Vision and Pattern Recognition (CVPR), 2025",
            areas: ["Generative Models", "Deep Learning for Vision"],
            image: "pub/ids.png",
            links: [
              { label: "paper", url: "https://arxiv.org/abs/2502.19930" },
              { label: "project", url: "https://shhh0620.github.io/IDS/" }
            ]
          },
          {
            title: "Haar Wavelet-based Representation Learning for unpaired " +
                   "image-to-image translation",
            authors: "S. Park*, S. Yoo*, N. Jeong, and E. Cha†",
            venue: "IEEE Access, vol. 13, pp. 61821-61832, 2025",
            areas: ["Generative Models", "Deep Learning for Vision"],
            image: "pub/hawaii.png",
            links: [
              { label: "paper", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10945777" },
              { label: "code",  url: "https://github.com/ParkSoobin1219/HAWAII" }
            ]
          }
        ]
      },
      {
        year: "2024",
        items: [
          {
            title: "Regularization by denoising diffusion process meets deep " +
                   "relaxation in phase",
            authors: "E. Cha†",
            venue: "Image and Vision Computing (IMAVIS), vol. 151, p. 105282, 2024",
            areas: ["Deep Learning for Vision", "Visual Understanding & Reasoning"],
            image: "pub/red.png",
            links: [
              { label: "paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S0262885624003871" }
            ]
          },
        ]
      },
      {
        year: "2022",
        items: [
          {
            title: "DeepPhaseCut: Deep Relaxation in Phase for Unsupervised " +
                   "Fourier Phase Retrieval",
            authors: "E. Cha, C. Lee, M. Jang, and J. C. Ye†",
            venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence " +
                   "(IEEE TPAMI), vol. 44, no. 12, pp. 9931-9943, 2022",
            areas: ["Deep Learning for Vision", "Visual Understanding & Reasoning"],
            image: "pub/deepphasecut.png",
            links: [
              { label: "paper", url: "https://ieeexplore.ieee.org/document/9664359?denied=" }
            ]
          },
          {
            title: "Low-dose sparse-view HAADF-STEM-EDX tomography of nanocrystals " +
                   "using unsupervised deep learning",
            authors: "E. Cha*, H. Chung*, J. Jang, J. Lee, E. Lee, and J. C. Ye†",
            venue: "ACS Nano, vol. 16, no. 7, pp. 10314-10326, 2022",
            areas: ["Deep Learning for Vision", "Visual Understanding & Reasoning"],
            image: "pub/acs.png",
            links: [
              { label: "paper", url: "https://pubs.acs.org/ancac3/article-abstract/16/7/10314/1348059/Low-Dose-Sparse-View-HAADF-STEM-EDX-Tomography-of?redirectedFrom=fulltext" }
            ]
          },
          {
            title: "Self-supervised dense consistency regularization for " +
                   "image-to-image translation",
            authors: "M. Ko*, E. Cha*, S. Suh, H. Lee, J-J. Han, J. Shin,  and B. Han†",
            venue: "Computer Vision and Pattern Recognition (CVPR), 2022",
            areas: ["Generative Models", "Deep Learning for Vision"],
            image: "pub/dcr.png",
            links: [
              { label: "paper", url: "https://openaccess.thecvf.com/content/CVPR2022/papers/Ko_Self-Supervised_Dense_Consistency_Regularization_for_Image-to-Image_Translation_CVPR_2022_paper.pdf" }
            ]
          }
        ]
      },
      {
        year: "2021",
        items: [
          {
            title: "Two-stage deep learning for accelerated 3D time-of-flight MRA " +
                   "without matched training data",
            authors: "H. Chung, E. Cha, L. Sunwoo, and J. C. Ye†",
            venue: "Medical Image Analysis (MedIA), vol. 71, p. 102047, 2021",
            areas: ["Medical Image Analysis", "Deep Learning for Vision"],
            image: "pub/media.png",
            links: [
              { label: "paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S1361841521000931" }
            ]
          },
          {
            title: "Deep learning STEM-EDX tomography of nanocrystals",
            authors: "Y. Han*, J. Jang*, E. Cha*, J. Lee†, H. Chung, M. Jeong, " +
                     "T-G. Kim, B. G. Chae, H. G. Kim, S. Jun, S. Hwang, E. Lee†, and J. C. Ye†",
            venue: "Nature Machine Intelligence (NMI), vol. 3, no. 3, pp. 267-274, 2021",
            note: "Selected as a front cover image",
            areas: ["Deep Learning for Vision", "Visual Understanding & Reasoning"],
            image: "pub/edx.png",
            links: [
              { label: "paper", url: "https://www.nature.com/articles/s42256-020-00289-5" },
              { label: "code",  url: "https://github.com/bispl-kaist/Deep-Learning-STEM-EDX-Tomography/tree/master/Deep_Learning_STEM-EDX_Tomography" }
            ]
          }
        ]
      },
      {
        year: "2020",
        items: [
          {
            title: "Unpaired training of deep learning tMRA for flexible " +
                   "spatio-temporal resolution",
            authors: "E. Cha, H. Chung, E. Y. Kim, and J. C. Ye†",
            venue: "IEEE Transactions on Medical Imaging (IEEE TMI), " +
                   "vol. 40, no. 1, pp. 166-179, 2020",
            areas: ["Medical Image Analysis", "Deep Learning for Vision"],
            image: "pub/tmra.png",
            links: [
              { label: "paper", url: "https://ieeexplore.ieee.org/document/9195022/?denied=" }
            ]
          },
          {
            title: "Accuracy improvement of quantification information using " +
                   "super-resolution with convolutional neural network for microscopy images",
            authors: "M. Kang, E. Cha, E. Kang, J. C. Ye, N. Her, J. Oh, D. Nam, " +
                     "M. Kim†, and S. Yang†",
            venue: "Biomedical Signal Processing and Control (BSPC), vol. 58, 2020",
            areas: ["Medical Image Analysis",  "Deep Learning for Vision"],
            image: "",
            links: [
              { label: "paper", url: "https://www.sciencedirect.com/science/article/abs/pii/S1746809420300021" }
            ]
          },
          {
            title: "Geometric Approaches to Increase the Expressivity of Deep " +
                   "Neural Networks for MR Reconstruction",
            authors: "E. Cha, G. Oh, J. C. Ye†",
            venue: "IEEE Journal of Selected Topics in Signal Processing " +
                   "(IEEE JSTSP), vol. 14, no. 6, pp. 1292-1305, 2020",
            note: "Selected as a front cover image",
            areas: ["Medical Image Analysis",  "Deep Learning for Vision"],
            image: "pub/geometric.png",
            links: [
              { label: "paper", url: "https://ieeexplore.ieee.org/document/9044723?denied=" }
            ]
          },
          {
            title: "Unsupervised Merge-Residual Learning for Time-of-Flight MRI",
            authors: "H. Chung, E. Cha, L. Sunwoo, and J. C. Ye†",
            venue: "Workshop on Deep Learning for Biomedical Image Reconstruction, " +
                   "IEEE International Symposium on Biomedical Imaging (ISBI), Iowa City, USA, 2020",
            areas: ["Medical Image Analysis",  "Deep Learning for Vision"],
            image: "",
            links: []
          }
        ]
      },
      {
        year: "2019",
        items: [
          {
            title: "Improved TWIST Imaging using k-Space Deep Learning",
            authors: "E. Cha, E. Y. Kim, and J. C. Ye†",
            venue: "International Society for Magnetic Resonance in Medicine (ISMRM), " +
                   "Montréal, Canada, 2019",
            areas: ["Medical Image Analysis",  "Deep Learning for Vision"],
            image: "",
            links: []
          }
        ]
      },
      {
        year: "2018",
        items: [
          {
            title: "Improved Time-Resolved MRA using k-Space Deep Learning",
            authors: "E. Cha, E. Y. Kim, and J. C. Ye†",
            venue: "International Workshop on Machine Learning for Medical Image " +
                   "Reconstruction (MLMIR), Granada, Spain, 2018",
            areas: ["Medical Image Analysis",  "Deep Learning for Vision"],
            image: "",
            links: []
          },
          {
            title: "Deep convolutional framelets: A general deep learning " +
                   "framework for inverse problems",
            authors: "J. C. Ye†, Y. Han, and E. Cha",
            venue: "SIAM Journal on Imaging Sciences (SIIMS), vol. 11, no. 2, pp. 991-1048, 2018",
            areas: ["Deep Learning for Vision", "Trustworthy & Robust AI"],
            image: "pub/framelet.png",
            links: [
              { label: "paper", url: "https://epubs.siam.org/doi/abs/10.1137/17M1141771" }
            ]
          }
        ]
      },
      {
        year: "2017",
        items: [
          {
            title: "True Temporal Resolution TWIST Imaging using Annihilating " +
                   "Filter-based Low-rank wrap around Hankel Matrix",
            authors: "E. Cha, K. H. Jin, E. Y. Kim, and J. C. Ye†",
            venue: "International Society for Magnetic Resonance in Medicine (ISMRM), " +
                   "Hawaii, USA, 2017",
            areas: ["Medical Image Analysis"],
            image: "",
            links: []
          }
        ]
      },
      {
        year: "2016",
        items: [
          {
            title: "Improved temporal resolution of TWIST imaging using annihilating " +
                   "filter-based low rank Hankel matrix approach",
            authors: "E. Cha, K. H. Jin, D. Lee, E. Y. Kim, S. H. Choi, and J. C. Ye†",
            venue: "2016 IEEE Symposium on Biomedical Imaging (ISBI), Prague, Czech Republic, 2016.",
            areas: ["Medical Image Analysis"],
            image: "",
            links: []
          },
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------------------
   * 6. People 페이지
   *    - photo: 사진 파일 경로. assets/img/ 폴더에 사진을 넣고 파일명을 적으세요.
   *      사진이 없으면 "" 로 두면 이니셜이 자동 표시됩니다.
   * ------------------------------------------------------------------------- */
  people: {
    // 6-1. 지도교수
    //   People 페이지의 지도교수 카드를 클릭하면 아래 상세 정보가
    //   professor.html(지도교수 상세 페이지)에 표시됩니다.
    professor: {
      name: "Eunju Cha",                          
      koreanName: "차은주",                         
      title: "Assistant Professor",               
      photo: "people/profile_ejc.jpg",                                  
      email: "eunju.cha@sookmyung.ac.kr",       
      office: "Room 317, Renaissance Plaza",            
      // 관심 연구 분야 태그
      interests: [, "Generative Models", "Computer Vision", "Medical Imaging Analysis", "Trustworthy AI"],
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=mqNGNqEAAAAJ&hl=ko&oi=ao" },
        { label: "LinkedIn",       url: "https://kr.linkedin.com/in/eunju-cha-b5b994127" }
      ],

      // ▼▼▼ 상세 프로필 (professor.html 에 표시) — 각 항목은 자유롭게 편집/추가 ▼▼▼
      bio: [
        "Her research focuses on computer vision and deep learning, with particular interests in generative modeling, medical image analysis, and reliable and interpretable vision systems. ",
        
        "She develops learning-based methods for understanding, restoring, and generating visual information using images, videos, and medical imaging data."+
        "A central theme of her research is to improve not only predictive performance, but also the interpretability, reliability, and robustness of visual learning systems.",

        "More broadly, her work aims to connect advances in visual intelligence with practical problems where accuracy, transparency, and real-world usefulness are equally important."
       
      ],

      // 학력 (최신순 권장)
      education: [
        { degree: "Ph.D. in Bio and Brain Engineering", org: "KAIST", year: "Feb. 2021", advisor: "Prof. Jong Chul Ye" },   // [확인필요]
        { degree: "M.S. in Bio and Brain Engineering",  org: "KAIST", year: "Feb. 2017", advisor: "Prof. Jong Chul Ye" },   // [확인필요]
        { degree: "B.S. in Bio and Brain Engineering",  org: "KAIST", year: "Feb. 2015", honors: "Cum Laude" }    // [확인필요]
      ],

      // 경력 (최신순 권장)
      experience: [
        { role: "Visting Professor", org: "KIRD (국가과학기술인력개발원)", period: "Apr. 2026 – Present" },
        { role: "Assistant Professor", org: "Dept. of Electrical Engineering, Sookmyung Women's University", period: "Sep. 2022 – Present" },
        { role: "Staff Researcher", org: "Computer Vision Lab, Samsung Advanced Institute of Technology (SAIT)", period: "Mar. 2021 – Aug. 2022" },
        { role: "Research Intern", org: "Korea Research Institute of Standards and Science (KRISS)", period: "Jun. 2012 – Aug. 2012" }
      ],

      // 학술 봉사 (Academic Services) — role(역할)과 detail(세부 내용)
      academicServices: [
        { role: "Conference reviewer", detail: "CVPR, ECCV, ICCV, ICLR, NeurIPS, AAAI, etc." },
        { role: "Journal reviewer",    detail: "IEEE TIP, IEEE TCI, IEEE TMI, EAAI, etc." }
      ],

      // 학술 활동 (Academic Activities) — 최신순 권장. period(기간) + text(내용)
      academicActivities: [
        { period: "Jan. 2025 – Current",   text: "Korean Society of Artificial Intelligence in Medicine (KoSAIM) 홍보이사" },
        { period: "Jan. 2025 – Current",   text: "Korean Multimedia Society (한국멀티미디어학회) 학술이사" },
        { period: "Aug. 2026",             text: "Korean Conference on Computer Vision (KCCV) 2026 프로그램 위원" },
        { period: "Feb. 2026",             text: "38th Workshop on Image Processing and Image Understanding (IPIU) 프로그램 위원" },
        { period: "Jan. 2026",             text: "ICEIE 2026 Technical Program Committee Member" },
        { period: "Aug. 2025",             text: "Korean Conference on Computer Vision (KCCV) 2025 프로그램 위원" },
        { period: "Feb. 2025",             text: "37th Workshop on Image Processing and Image Understanding (IPIU) 프로그램 위원" },
        { period: "Aug. 2024",             text: "Korean Conference on Computer Vision (KCCV) 2024 프로그램 위원" },
        { period: "Feb. 2024",             text: "36th Workshop on Image Processing and Image Understanding (IPIU) 프로그램 위원" },
        { period: "Jan. 2023 – Dec. 2024", text: "Korean Society of Artificial Intelligence in Medicine (KoSAIM) 총무간사" }
      ],

      // 초청 강연 (Invited Talks) — period(기간) + title(제목/행사) + detail(강연명, 선택)
      //   최신순 권장. 10개까지 보이고 그 이상은 "More" 버튼으로 펼쳐집니다.
      invitedTalks: [
        { period: "2026.08.03", title: "Korean Conference on Computer Vision (KCCV) 2026", detail: "Semantic Alignment for Pose-Invariant Identity Preserving Diffusion" },
        { period: "2026.07.28~2026.07.29", title: "KIRD 컴퓨터 비전 딥러닝", detail: "컴퓨터 비전 딥러닝" },
        { period: "2026.06.25", title: "대한전자공학회 2026 하계종합학술대회 신진연구자 세션", detail: "Toward Controllable Image and Video Generation via Test-Time Optimization" },
        { period: "2025.10.23~2025.10.24", title: "KIRD 컴퓨터 비전 딥러닝 첫걸음 과정 강의", detail: "컴퓨터 비전 딥러닝 첫걸음 2기" },
        { period: "2025.09.24", title: "81st Korean Congress of Radiology (KCR), Refresher Course", detail: "Multimodal Training for Diagnosis and Image Enhancement" },
        { period: "2025.08.06", title: "Korean Conference on Computer Vision (KCCV) 2025", detail: "Identity-preserving Distillation Sampling by Fixed-Point Iterator" },
        { period: "2025.07.18", title: "2025년 영상이해 및 영상처리연구회 합동 여름학교, Learning / Architecture and Computational Photograph 세션", detail: "Image Processing using Pre-trained Diffusion Model" },
        { period: "2025.06.19~2025.06.20", title: "KIRD 컴퓨터 비전 딥러닝 첫걸음 과정 강의", detail: "컴퓨터 비전 딥러닝 첫걸음 1기" },
        { period: "2025.03.25", title: "인하대학교 2025-1학기 인공지능융합세미나", detail: "생성형 AI 기반의 영상 처리 방법론" },
        { period: "2024.11.09", title: "12th International Congress on MRI (ICMRI), Meet the Experts", detail: "Self-supervised Learning for Accelerated MRI" },
        { period: "2024.10.17", title: "제 34회 인공지능신호처리 학술대회, 신진연구자 발표", detail: "Signal Processing-based Learning Algorithms for Phase Retrieval" },
        { period: "2024.10.14", title: "2024년 삼성전자 협력사 대상 우수기술설명회, 스마트제조", detail: "비전 및 영상처리를 통한 미세공정 라인의 계측 기술" },
        { period: "2024.07.26", title: "한국현미경학회 제 29회 투과전자현미경 워크샵", detail: "Introduction to Machine Learning" },
        { period: "2024.06.28", title: "2024 한국정보처리학회 AI시스템연구회 워크숍, Tutorial", detail: "Introduction to Diffusion Model" },
        { period: "2024.05.31", title: "국립보건연구원 헬스케어인공지능연구과 세미나", detail: "Generative Models for Medical Image Harmonization" },
        { period: "2024.05.17", title: "2024년도 한국멀티미디어학회 춘계학술발표대회, 신진연구자 세션", detail: "Solving Phase Retrieval using Generative Models" },
        { period: "2024.02.06", title: "2024년도 바이오영상신호처리 겨울학교", detail: "Biomedical Image Reconstruction using Deep Learning" },
        { period: "2024.02.01", title: "36th Workshop on Image Processing and Image Understanding (IPIU), 신진연구자 세션", detail: "Signal Processing-based Learning Algorithms for Phase Retrieval" },
        { period: "2023.10.21", title: "2023 대한의료인공지능학회 정기학술대회, Technical Updates", detail: "Biomedical Image Reconstruction using Deep Learning" },
        { period: "2023.06.01", title: "2023 한국현미경학회 춘계학술대회, Young Microscopist", detail: "Low-dose Sparse-view HAADF-STEM-EDX Tomography using Unsupervised Deep Learning" }
      ],
    },

    // 6-2. 구성원 그룹 (박사/석사/학부 등). 그룹은 자유롭게 추가/삭제 가능.
    groups: [
      /*
      {
        title: "Ph.D. Students",
        members: [
          { name: "Student Name", photo: "", role: "Ph.D. Student",
            note: "Research: Vision-Language Models" }
        ]
      },
      */
      {
        title: "M.S. Students",
        members: [
          { name: "Soobin Park", 
           photo: "people/sbpark.jpg", 
           email: "psb1219j@sookmyung.ac.kr",
           education: "B.S., EE, Sookmyung Women's Univ."
          },
          { name: "Seohyeon Yoo", 
           photo: "people/shyoo.png", 
           email: "yshalice3814@sookmyung.ac.kr",
           education: "B.S., EE, Sookmyung Women's Univ."
          },
          
        ]
      },
      {
        title: "Undergraduate Researchers",
        members: [
          { name: "Dawoon Han", 
           photo: "people/char.png", 
           email: "handawoon@sookmyung.ac.kr"
          },
          { name: "Eunso Jo", 
           photo: "people/char.png", 
           email: "aliennumber1one@sookmyung.ac.kr"
          },
          { name: "Jihye Park", 
           photo: "people/char.png", 
           email: "jihyepark@sookmyung.ac.kr"
          },
        ]
      }
    ],

    // 6-3. 졸업생(Alumni) — People 페이지의 "Alumni" 버튼을 누르면
    //   alumni.html(동문 상세 페이지)에 아래 목록이 카드로 표시됩니다.
    //   degree: "Ph.D." 또는 "M.S." (배지 색이 자동으로 구분됩니다)
    //   position: 현재 소속/직장 (선택),  photo: 사진 파일명 (선택)
    alumni: [
      { name: "Nabin Jung", degree: "M.S.", year: "2026",
        position: "Research Intern at ETRI", photo: "people/nbjeong.png"},
    ],
    [
      { name: "Yunseong Jeong", degree: "Intern", year: "2026",
        photo: "people/char.png"},
      { name: "Kyurie Chio", degree: "Intern", year: "2026",
        photo: "people/char.png"},
      { name: "Na-hyun Kim", degree: "Intern", year: "2025",
        position: "M.S., Hanyang University", photo: "people/char.png"},
      { name: "Hongsil Kim", degree: "Intern", year: "2025",
        photo: "people/char.png"},
      { name: "Namkyeong Kwon", degree: "Intern", year: "2025",
        photo: "people/char.png"},
      { name: "Jiho Hwang", degree: "Intern", year: "2025",
        photo: "people/char.png"},
       { name: "Chaehee Jeon", degree: "Intern", year: "2024",
        position: "M.S., Hanyang University", photo: "people/char.png"},
    ]
  },

  /* ---------------------------------------------------------------------------
   * 7. Teaching 페이지 — 담당 강의 목록. 최신 학기를 위에 두세요.
   *    - term: 학기 (예: "2025 Spring")
   *    - level: "Undergraduate" 또는 "Graduate" (선택)
   * ------------------------------------------------------------------------- */
  teaching: {
    intro:
      "Courses taught at Sookmyung Women's University.",
    courses: [
      {
        code: "21105872",
        title: "Advanced Artificial Intelligence",
        term: "2026 Spring",
        level: "Graduate",
        description:
          "Advanced topics in artificial intelligence, including modern learning methods and emerging AI technologies."
      },
      {
        code: "21105412",
        title: "Deep Generative Models",
        term: "2024 Fall, 2025 Fall",
        level: "Graduate",
        description:
          "Foundations and recent advances in generative models, including VAEs, GANs, autoregressive models, and diffusion models."
      },
      {
        code: "21102955",
        title: "Programming Basics for Electronic Engineering",
        term: "2024 Fall",
        level: "Undergraduate",
        description:
          "Fundamental programming concepts and problem-solving techniques for applications in electrical and electronic engineering."
      },
      {
        code: "21104170",
        title: "Digital Image Processing",
        term: "2023 Spring, 2024 Spring, 2025 Spring",
        level: "Undergraduate",
        description:
          "Fundamental techniques for image enhancement, filtering, restoration, transformation, and digital image analysis."
      },
      {
        code: "21104171",
        title: "Introduction to Machine Learning",
        term: "2023 Spring, 2024 Spring, 2025 Spring",
        level: "Undergraduate",
        description:
          "Core concepts of machine learning, including supervised and unsupervised learning, model evaluation, and basic algorithms."
      },
      {
        code: "21102958",
        title: "Engineering Mathematics",
        term: "2022 Fall, 2023 Fall, 2024 Fall, 2025 Fall, 2026 Spring",
        level: "Undergraduate",
        description:
          "Mathematical foundations for engineering, including differential equations,  linear algebra, and vector calculus."
      },
      {
        code: "21102968",
        title: "Discrete-time Signal Processing",
        term: "2022 Fall, 2023 Fall, 2025 Fall",
        level: "Undergraduate",
        description:
          "Fundamental concepts of discrete-time signals and systems, including sampling, transforms, and filtering."
      }
    ]
  },

  /* ---------------------------------------------------------------------------
   * 8. Photos 페이지 — 연구실 사진 갤러리.
   *    - src: 사진 파일명. assets/img/ 폴더에 넣고 파일명만 적으세요.
   *      비워두면("") 예시 자리 표시가 나옵니다.
   *    - caption: 사진 아래 설명 
   * ------------------------------------------------------------------------- */
  photos: {
    intro:
      "A collection of moments from conferences, seminars, academic events, and life beyond the lab.",
    items: [
      { src:["photos/2026_kccv_2.jpg", "photos/2026_KCCV.jpg"], caption: "2026 KCCV" },
      { src: ["photos/2026_picnic.jpg"], caption: "2026 PICNIC" },
      { src: ["photos/2025_kccv.jpg", "photos/2025_kccv_2.jpg"], caption: "2025 KCCV" },
      { src: ["photos/2025_straw.jpg"], caption: "2025 Strawberry party" },
      { src: ["photos/2024_eusipco.jpg"], caption: "2024 EUSIPCO" }
    ]
  },

  /* ---------------------------------------------------------------------------
   * 9. Contact 페이지
   * ------------------------------------------------------------------------- */
  contact: {
    intro:[
      "We welcome inquiries from students, researchers, and collaborators who share our interests in artificial intelligence, computer vision, and visual intelligence.",
      "Our lab is open to research collaborations, academic exchanges, and interdisciplinary projects that explore new directions in AI and its real-world applications.",
      "If you are interested in our work or potential collaboration, please feel free to get in touch."
      ],

    email: "eunju.cha@sookmyung.ac.kr",            
    phone: "+82-2-2077-7058",                                    
    office: "Room 317, Renaissance Plaza, Sookmyung Women's University",            
   // address: "Sookmyung Women's University, Cheongpa-ro 47-gil 100, Yongsan-gu, Seoul, Republic of Korea",
    // 지원 안내 문구 
    
    joinNote: [
      "We are looking for highly motivated graduate and undergraduate students who are interested in pursuing research in artificial intelligence, computer vision, and visual intelligence.",
      "We particularly welcome students who are curious, self-driven, and eager to develop their research skills through challenging research problems.",  
      "If you are interested in joining VIPL, please email your CV along with a brief statement describing your academic background, research interests, and the topics you would like to explore."
    ],
  }
};
