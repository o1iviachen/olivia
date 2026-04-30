(() => {
  const track = document.querySelector('.pin-track');
  if (!track) return;

  const PHOTOS = [
    "037E76B1-0CC9-4A74-9911-76E812ADBBA6_1_105_c.jpeg",
    "08FC4266-158A-4DDF-B3F5-D82DEA18B767_1_105_c.jpeg",
    "0D1B9E99-60F6-4097-B7E3-4ED63AED60FD_1_105_c.jpeg",
    "132DC714-6952-47B0-AC13-71D49AF28A7F_4_5005_c.jpeg",
    "1550F6AA-185A-4B91-9F7B-AFE095C81CE1_1_105_c.jpeg",
    "197D989E-DFFE-4EE4-A022-19DA0709017D_1_105_c.jpeg",
    "1C2F6DE7-2370-436C-81BF-79D0FB03DDE7_1_105_c.jpeg",
    "1CC12B0E-930C-4927-982A-AFC1CD3C9307_1_102_a.jpeg",
    "1E39E9ED-5C16-4C0D-B3B1-1D2D5435A439_1_105_c.jpeg",
    "1E6F5216-E4D3-4D02-8C72-02B1258B1571_1_105_c.jpeg",
    "20D6FFF6-E03A-4309-BA61-392CC5F706D8_1_105_c.jpeg",
    "222F86E1-4F50-43BB-AC20-98744E20B339_1_105_c.jpeg",
    "2633D753-0426-453A-BA57-D75EE7884761_1_105_c.jpeg",
    "2A8F79FE-2116-4606-85CA-657E8305CF86_1_105_c.jpeg",
    "2EB5A1AA-D1BB-4CC0-AB49-178E9D838C02_1_105_c.jpeg",
    "2FFCB058-D5BF-4F92-86BC-CA9A560FB62D_1_105_c.jpeg",
    "31D7FB38-0382-4508-A5E9-0411E3032060_1_105_c.jpeg",
    "3323580E-D9D5-43B1-A431-EC2E2D962109_1_105_c.jpeg",
    "362B95AC-2AE2-4085-835B-08115B629A0F_1_105_c.jpeg",
    "39B3D49B-DE6A-46C4-833F-DBABC6F52035_1_105_c.jpeg",
    "3A4313BE-0F8E-42C1-B335-36949A8D263E_1_105_c.jpeg",
    "3AEB3361-237C-4AF7-92A6-B9AFC270CB3D_1_105_c.jpeg",
    "40DF3460-6661-41FE-B66A-B4A2CCAB3674_1_105_c.jpeg",
    "49375989-1FA1-4816-8333-8BF849E5A346_1_105_c.jpeg",
    "4AFDCC7C-1B10-4FB3-AAA2-0D9993E27B4A_1_105_c.jpeg",
    "4CB562E9-3CED-4D83-867D-2CEA20312B43_1_105_c.jpeg",
    "4DAB95DA-B23D-4F93-B3CD-228E8C3106FD_1_105_c.jpeg",
    "4E8EC7C3-4CE4-43F2-B000-2375E55E4B8A_1_105_c.jpeg",
    "509209A0-EECB-4DE6-A1C0-20070C3CDAA3_1_105_c.jpeg",
    "5097F6ED-D651-464A-9870-8C6F54713CB9_1_105_c.jpeg",
    "61D0CDBE-AF94-4DB0-BA3B-4A43F6D05327_1_105_c.jpeg",
    "63767487-2630-466C-B782-FD45237D41B2_1_105_c.jpeg",
    "66EA3D34-F69E-4874-9B7D-F6280C26797E_1_105_c.jpeg",
    "719B85C1-362B-4A2F-B59D-72DA5E9C7FB4_1_105_c.jpeg",
    "72B1952B-8C18-42E7-913B-D0D0006EF445_1_105_c.jpeg",
    "74596E4D-3536-46C1-9CAD-B5BB2D3F1B41_1_105_c.jpeg",
    "779EEA0D-5260-42F7-88B3-611A19A1F083_1_105_c.jpeg",
    "7AA96E97-87BD-42A8-88AE-4CDA27A1BC2A_4_5005_c.jpeg",
    "7BB3536D-78D5-44EB-848C-8EF886F6E8E9_1_105_c.jpeg",
    "87144DE9-2929-45DF-A04E-4468B984A320_1_105_c.jpeg",
    "91F331E2-2B4E-4D43-94C6-58FE0DC4FD3E_1_105_c.jpeg",
    "94088AA4-5206-41B6-BFE3-F7F29D1F823A_1_105_c.jpeg",
    "97D33AE9-DEE8-4EC8-B8B4-ED00531900B7_1_105_c.jpeg",
    "9F183BF7-60F1-43E3-8C37-52D245C50BB1_1_105_c.jpeg",
    "A253A4F3-F3EB-4AD3-BDA0-390D21EA5038_4_5005_c.jpeg",
    "A720B76A-818D-414B-968D-98DA545C6D30_1_105_c.jpeg",
    "AFD130F9-F62F-4491-8935-9C4A31F04D7C_1_105_c.jpeg",
    "B343C9C3-DF66-4EAB-9352-1CBFFA6A1EE1_1_105_c.jpeg",
    "B958BB31-BE27-40D0-9FD4-07C39FD4CA89_1_105_c.jpeg",
    "BAAC066B-6544-4FB7-B4E8-DB340F0E09F7_1_105_c.jpeg",
    "C18460B4-B861-4D06-B17D-8B61AB13EE10_1_105_c.jpeg",
    "C37C97E0-2398-40B1-9392-C068326AEA09_1_105_c.jpeg",
    "C69CFAEA-0B2D-4CF7-A537-A4A414021B7C_1_105_c.jpeg",
    "D203161A-E6CB-44D4-83EB-3ECDE5521F4C_1_105_c.jpeg",
    "D32DAEDF-97B2-4D85-82F7-9A3CAD196D4C_1_105_c.jpeg",
    "DA2FB971-170E-4C90-8479-BDD2EA7D6F10_1_105_c.jpeg",
    "DAA4BEB1-E756-465C-BF78-EF1F2C54C6CA_1_105_c.jpeg",
    "DB34D24E-29ED-49D1-8CE1-47E283F1E553_1_105_c.jpeg",
    "DDAE3936-E214-481A-BED8-052FEC87D16D_1_105_c.jpeg",
    "DF88B8DE-4662-4A34-8EC3-4FE12983A0F0_1_105_c.jpeg",
    "E105E6B3-91DE-4C75-A229-ADA031063762_1_105_c.jpeg",
    "E206C5FB-4142-428D-8B13-3B905B81D332_1_105_c.jpeg",
    "E21CC000-28C3-49AF-9AB3-6A85F39F6535_1_105_c.jpeg",
    "E43A12C1-B16D-4521-A2B2-7E034C7C53A9_1_105_c.jpeg",
    "E78CEE56-DB9D-4D40-9B67-29A096B44FC2_1_105_c.jpeg",
    "E7B7F1C5-7D54-4074-8779-A00030E291B1_1_105_c.jpeg",
    "EB4B464A-0585-4762-B223-997E690FA75C_1_105_c.jpeg",
    "F0F77D2C-16D7-4827-BB96-B6C60C0FB325_4_5005_c.jpeg",
    "F6364D27-D47F-4CAB-90DE-71FF4FDB05B6_1_105_c.jpeg",
    "F7C2A238-8558-4774-9607-7F25B7BA859E_1_105_c.jpeg",
    "FC35252F-ADCD-4BB6-B454-B9B888D876F1_1_105_c.jpeg",
    "FCBEE262-B508-4FA3-984C-E65F55958ED8_1_105_c.jpeg",
  ];

  for (let i = PHOTOS.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [PHOTOS[i], PHOTOS[j]] = [PHOTOS[j], PHOTOS[i]];
  }

  const originals = PHOTOS.map(name => {
    const img = document.createElement('img');
    img.src = `photos/${encodeURIComponent(name)}`;
    img.alt = '';
    img.loading = 'lazy';
    track.appendChild(img);
    return img;
  });

  for (let i = 0; i < 2; i++) {
    originals.forEach(img => {
      const clone = img.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }

  const STEP = 126;
  const LOOP = originals.length * STEP;

  let offset = 0;
  let target = 0;
  const baseTransform = 'rotateZ(-28deg)';

  const imgs = track.querySelectorAll('img');

  const AUTO_DRIFT = 0.4;

  function render() {
    target += AUTO_DRIFT;
    offset += (target - offset) * 0.12;
    const wrapped = ((offset % LOOP) + LOOP) % LOOP;
    track.style.transform = `${baseTransform} translateX(${-wrapped}px)`;

    imgs.forEach((img, i) => {
      const pos = i * STEP - wrapped;
      const wave = Math.sin(pos / 180 + 1.2) * 48;
      img.style.setProperty('--wave-y', `${wave}px`);
      const r = img.getBoundingClientRect();
      img.style.zIndex = Math.round(r.top + r.height / 2);
    });

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  const ANGLE = -28 * Math.PI / 180;
  const DIR_X = Math.cos(ANGLE);
  const DIR_Y = Math.sin(ANGLE);

  window.addEventListener('wheel', (e) => {
    const projected = e.deltaX * DIR_X + e.deltaY * DIR_Y;
    target -= projected;
    e.preventDefault();
  }, { passive: false });

  let touchY = null, touchX = null;
  window.addEventListener('touchstart', (e) => {
    touchY = e.touches[0].clientY;
    touchX = e.touches[0].clientX;
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (touchY == null) return;
    const dy = touchY - e.touches[0].clientY;
    const dx = touchX - e.touches[0].clientX;
    target -= (dx * DIR_X + dy * DIR_Y);
    touchY = e.touches[0].clientY;
    touchX = e.touches[0].clientX;
  }, { passive: true });
})();
