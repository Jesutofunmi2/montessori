/* eslint-disable @typescript-eslint/no-explicit-any */

export const getMarkup: any = (color?: string) => {
    const svgFillColor = color || '#000000';
    return {
      backBtn: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 4L8 12L16 20" stroke="#0B0C0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      addCircle: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2355_242)">
  <path d="M4.66667 8H11.3333M8 4.66667V11.3333V4.66667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_2355_242">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `,
      shopStore: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.13889 4.25H12.8611L14.25 6.4375V8.625H1.75V6.4375L3.13889 4.25Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.75 8.625H13V13C13 13.3452 12.7202 13.625 12.375 13.625H7.375C7.02981 13.625 6.75 13.3452 6.75 13V8.625Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 8.625V13.625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.375 1.75H3.625" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      calculator: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2403_9901)">
  <path d="M4.25 14.875H11.75C12.4404 14.875 13 14.2874 13 13.5625V3.0625C13 2.33763 12.4404 1.75 11.75 1.75H4.25C3.55964 1.75 3 2.33763 3 3.0625V13.5625C3 14.2874 3.55964 14.875 4.25 14.875Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.84619 12.7402H5.741H6.63581" stroke="white" stroke-width="0.3332" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.2702 13.5723V11.7827M9.37543 12.7494H11.165" stroke="white" stroke-width="0.3332" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.11749 6.3291C6.11749 6.67428 5.83767 6.9541 5.49249 6.9541C5.14731 6.9541 4.86749 6.67428 4.86749 6.3291C4.86749 5.98392 5.14731 5.7041 5.49249 5.7041C5.83767 5.7041 6.11749 5.98392 6.11749 6.3291ZM6.1175 8.2041C6.1175 8.54928 5.83768 8.8291 5.4925 8.8291C5.14732 8.8291 4.8675 8.54928 4.8675 8.2041C4.8675 7.85892 5.14732 7.5791 5.4925 7.5791C5.83768 7.5791 6.1175 7.85892 6.1175 8.2041ZM5.5075 10.5542C5.85268 10.5542 6.1325 10.2744 6.1325 9.92917C6.1325 9.58399 5.85268 9.30417 5.5075 9.30417C5.16233 9.30417 4.8825 9.58399 4.8825 9.92917C4.8825 10.2744 5.16233 10.5542 5.5075 10.5542ZM8.61753 8.2041C8.61753 8.54928 8.33771 8.8291 7.99253 8.8291C7.64735 8.8291 7.36753 8.54928 7.36753 8.2041C7.36753 7.85892 7.64735 7.5791 7.99253 7.5791C8.33771 7.5791 8.61753 7.85892 8.61753 8.2041ZM8.00753 10.5542C8.35271 10.5542 8.63253 10.2744 8.63253 9.92917C8.63253 9.58399 8.35271 9.30417 8.00753 9.30417C7.66236 9.30417 7.38253 9.58399 7.38253 9.92917C7.38253 10.2744 7.66236 10.5542 8.00753 10.5542ZM11.1175 8.2041C11.1175 8.54928 10.8377 8.8291 10.4925 8.8291C10.1473 8.8291 9.86752 8.54928 9.86752 8.2041C9.86752 7.85892 10.1473 7.5791 10.4925 7.5791C10.8377 7.5791 11.1175 7.85892 11.1175 8.2041ZM10.5075 10.5542C10.8527 10.5542 11.1325 10.2744 11.1325 9.92917C11.1325 9.58399 10.8527 9.30417 10.5075 9.30417C10.1623 9.30417 9.88252 9.58399 9.88252 9.92917C9.88252 10.2744 10.1623 10.5542 10.5075 10.5542ZM8.61753 6.3291C8.61753 6.67428 8.33771 6.9541 7.99253 6.9541C7.64735 6.9541 7.36753 6.67428 7.36753 6.3291C7.36753 5.98392 7.64735 5.7041 7.99253 5.7041C8.33771 5.7041 8.61753 5.98392 8.61753 6.3291ZM10.4925 6.9541C10.8377 6.9541 11.1175 6.67428 11.1175 6.3291C11.1175 5.98392 10.8377 5.7041 10.4925 5.7041C10.1473 5.7041 9.86752 5.98392 9.86752 6.3291C9.86752 6.67428 10.1473 6.9541 10.4925 6.9541Z" fill="white"/>
  <rect x="2.75" y="4.25" width="10.5" height="0.75" rx="0.375" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_2403_9901">
  <rect width="15" height="15" fill="white" transform="translate(0.5 0.5)"/>
  </clipPath>
  </defs>
  </svg>
  `,
      wallet: `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.2965 5.85845C12.2965 5.57785 12.1882 5.32962 12.0147 5.14411H13.1875V6.67679H11.9026C12.1404 6.48574 12.2965 6.19544 12.2965 5.85845ZM10.048 0.5625C11.1074 0.5625 11.8776 0.862031 12.3809 1.3489C12.785 1.73988 13.0622 2.29547 13.1541 3.03017L10.8916 3.04848C9.27674 3.04973 7.9315 4.31595 7.9315 5.922C7.9315 7.52885 9.27807 8.79553 10.894 8.79553H13.1741C13.1102 9.61654 12.8217 10.2308 12.3821 10.6536C11.8785 11.1379 11.1074 11.4375 10.048 11.4375H3.952C2.89261 11.4375 2.12153 11.1379 1.61793 10.6536C1.11721 10.172 0.8125 9.44203 0.8125 8.44102V3.55898C0.8125 2.55797 1.11721 1.82802 1.61793 1.34644C2.12153 0.862083 2.89261 0.5625 3.952 0.5625H10.048Z" stroke="white" stroke-width="1.125"/>
  </svg>
  `,
      thumbsUp: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.92756 7.16431H3.02102C2.31906 7.16431 1.75 7.74106 1.75 8.45263V12.9617C1.75 13.6732 2.31906 14.25 3.02102 14.25H4.92756M4.92756 7.16431L6.96206 2.52442C7.24375 1.88201 7.99994 1.55008 8.61319 1.8785C9.56756 2.38963 9.37613 2.86872 9.37613 5.87599H12.9787C13.7577 5.87599 14.3534 6.57979 14.2349 7.36019L13.355 13.1576C13.2596 13.7861 12.7261 14.25 12.0988 14.25H4.92756V7.16431ZM4.92756 7.16431V14.25V7.16431Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      cash: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2115_5559)">
  <path d="M5.8037 1.66437L5.41816 1.60159L3.87597 1.35045C3.53528 1.29497 3.21412 1.52617 3.15864 1.86687L2.25455 7.41874L2.14154 8.11272" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.01812 2.2266L8.34628 1.82786L7.00262 1.03038C6.70579 0.854212 6.32234 0.952016 6.14616 1.24886L3.27524 6.08605L1.83978 8.50465" stroke="white" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.20918 9.64704C0.986395 9.38339 1.01952 8.98905 1.28317 8.76626L9.8761 1.50513C10.1398 1.28233 10.5341 1.31546 10.7569 1.57911L14.7908 6.35296C15.0136 6.61662 14.9805 7.01095 14.7169 7.23375L6.12393 14.4949C5.86028 14.7177 5.46594 14.6845 5.24315 14.4209L1.20918 9.64704Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.80676 8.95481C9.33406 8.50923 9.40031 7.72056 8.95474 7.19325C8.50916 6.66595 7.72048 6.59969 7.19317 7.04527C6.66587 7.49085 6.59962 8.27953 7.0452 8.80684C7.49078 9.33414 8.27945 9.40039 8.80676 8.95481Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.73794 11.7936L5.2891 11.3085L5.14188 11.4448L5.03011 11.324L5.17733 11.1877L5.03412 11.033L4.8869 11.1692L4.77513 11.0484L4.92235 10.9122L4.49097 10.446L4.68726 10.2644L5.29793 10.5646L5.52064 10.3586L5.08927 9.89238L5.23837 9.75441L5.66975 10.2206L5.81696 10.0844L5.92873 10.2052L5.78152 10.3414L5.92473 10.4962L6.07194 10.3599L6.18371 10.4807L6.0365 10.6169L6.48534 11.102L6.28716 11.2854L5.65902 10.9662L5.43631 11.1723L5.88515 11.6574L5.73794 11.7936ZM5.32454 11.0515L5.50196 10.8874L5.30213 10.785L5.17756 10.9002L5.32454 11.0515ZM6.08998 10.9738L6.09753 10.9669L5.88928 10.7532L5.81001 10.8265L6.08998 10.9738ZM5.06579 10.7795L5.14506 10.7061L4.84923 10.5454L4.84168 10.5524L5.06579 10.7795ZM5.65294 10.7476L5.7794 10.6306L5.63242 10.4794L5.45312 10.6453L5.65294 10.7476Z" fill="white"/>
  <path d="M11.5304 6.2805L9.96853 4.71858L11.5304 6.2805Z" fill="#300F88"/>
  <path d="M10.8276 6.51479L11.4914 5.85097C11.6424 5.70001 11.6424 5.45526 11.4914 5.3043C11.3404 5.15334 11.0957 5.15334 10.9447 5.3043L10.5542 5.69478C10.4033 5.84574 10.1585 5.84574 10.0076 5.69478C9.85661 5.54382 9.85661 5.29907 10.0076 5.14811L10.6714 4.48429M11.5304 6.2805L9.96853 4.71858" stroke="white" stroke-width="0.220889" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_2115_5559">
  <rect width="15" height="15" fill="white" transform="translate(0.5 0.5)"/>
  </clipPath>
  </defs>
  </svg>
  `,
      globe: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25Z" stroke="white" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.375 8H14.25" stroke="white" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1.87619C9.5465 3.45436 10.5 5.61579 10.5 7.99994C10.5 10.3841 9.5465 12.5455 8 14.1236" stroke="white" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 1.87619C6.45352 3.45436 5.5 5.61579 5.5 7.99994C5.5 10.3841 6.45352 12.5455 8 14.1236" stroke="white" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      appStore: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.375 2.375H3C2.65482 2.375 2.375 2.65482 2.375 3V7.375C2.375 7.72018 2.65482 8 3 8H7.375C7.72018 8 8 7.72018 8 7.375V3C8 2.65482 7.72018 2.375 7.375 2.375Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.3125 10.5H10.8125C10.6399 10.5 10.5 10.6399 10.5 10.8125V13.3125C10.5 13.4851 10.6399 13.625 10.8125 13.625H13.3125C13.4851 13.625 13.625 13.4851 13.625 13.3125V10.8125C13.625 10.6399 13.4851 10.5 13.3125 10.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.3125 4.875H10.8125C10.6399 4.875 10.5 5.01491 10.5 5.1875V7.6875C10.5 7.86009 10.6399 8 10.8125 8H13.3125C13.4851 8 13.625 7.86009 13.625 7.6875V5.1875C13.625 5.01491 13.4851 4.875 13.3125 4.875Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.6875 10.5H5.1875C5.01491 10.5 4.875 10.6399 4.875 10.8125V13.3125C4.875 13.4851 5.01491 13.625 5.1875 13.625H7.6875C7.86009 13.625 8 13.4851 8 13.3125V10.8125C8 10.6399 7.86009 10.5 7.6875 10.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      connectLink: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.25 1.75H6.75C6.40482 1.75 6.125 2.02982 6.125 2.375V4.875C6.125 5.22018 6.40482 5.5 6.75 5.5H9.25C9.59518 5.5 9.875 5.22018 9.875 4.875V2.375C9.875 2.02982 9.59518 1.75 9.25 1.75Z" stroke="#7647EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 11.75V9.25C3 8.90481 3.27982 8.625 3.625 8.625H12.375C12.7202 8.625 13 8.90481 13 9.25V11.75" stroke="#7647EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 14.25C3.69036 14.25 4.25 13.6904 4.25 13C4.25 12.3096 3.69036 11.75 3 11.75C2.30964 11.75 1.75 12.3096 1.75 13C1.75 13.6904 2.30964 14.25 3 14.25Z" stroke="#7647EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 14.25C13.6904 14.25 14.25 13.6904 14.25 13C14.25 12.3096 13.6904 11.75 13 11.75C12.3096 11.75 11.75 12.3096 11.75 13C11.75 13.6904 12.3096 14.25 13 14.25Z" stroke="#7647EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 14.25C8.69036 14.25 9.25 13.6904 9.25 13C9.25 12.3096 8.69036 11.75 8 11.75C7.30964 11.75 6.75 12.3096 6.75 13C6.75 13.6904 7.30964 14.25 8 14.25Z" stroke="#7647EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 5.5V11.75" stroke="#7647EE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      launchLink: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.125 1.75H14.25V4.875" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.625 8.625V12.375C13.625 13.0654 13.0654 13.625 12.375 13.625H3.625C2.93464 13.625 2.375 13.0654 2.375 12.375V3.625C2.375 2.93464 2.93464 2.375 3.625 2.375H7.375" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.625 7.375L13.9375 2.0625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      fileText: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.25 14.25H11.75C12.4404 14.25 13 13.6904 13 13V6.64277C13 6.31124 12.8683 5.99331 12.6339 5.75888L8.99113 2.11612C8.75669 1.88169 8.43875 1.75 8.10725 1.75H4.25C3.55964 1.75 3 2.30964 3 3V13C3 13.6904 3.55964 14.25 4.25 14.25Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.625 2.0625V6.125H12.375" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 11.125H9.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 8.625H9.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 6.125H6.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      calender: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.375 4.25C2.375 3.55964 2.93464 3 3.625 3H12.375C13.0654 3 13.625 3.55964 13.625 4.25V13C13.625 13.6904 13.0654 14.25 12.375 14.25H3.625C2.93464 14.25 2.375 13.6904 2.375 13V4.25Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.375 6.75H13.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 1.75V4.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 1.75V4.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      tagPrice: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.375 8.24562V2.375H8.24562L13.2776 7.407C13.7408 7.87012 13.7408 8.62113 13.2776 9.08431L9.08431 13.2776C8.62113 13.7408 7.87012 13.7408 7.407 13.2776L2.375 8.24562Z" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.88507 4.88507L4.875 4.875" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      arrowTopRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.2426 3.75735V10.357M3.75732 12.2427L12.2426 3.75735L3.75732 12.2427ZM12.2426 3.75735L5.64293 3.75736L12.2426 3.75735Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      arrowBottomLeft: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.75732 12.2427V5.64297M12.2426 3.75735L3.75732 12.2427L12.2426 3.75735ZM3.75732 12.2427L10.357 12.2426L3.75732 12.2427Z" stroke="#7647EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      cashAnalytics: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.91675 2.60416C1.91675 2.27049 2.18724 2 2.52091 2H13.3958C13.7295 2 14 2.27049 14 2.60416V8.64577C14 8.97944 13.7295 9.24993 13.3958 9.24993H2.52091C2.18724 9.24993 1.91675 8.97944 1.91675 8.64577V2.60416Z" stroke="white" stroke-width="0.991238" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 11.0626C14 11.0626 13.1304 11.4663 12.5366 11.4758C11.9075 11.4858 11.6083 11.0507 10.9792 11.0626C10.3362 11.0748 10.0505 11.57 9.4076 11.5546C8.81008 11.5404 8.55603 11.0674 7.95835 11.0626C7.33047 11.0577 7.06422 11.5839 6.43633 11.5809C5.81701 11.578 5.55684 11.0567 4.93755 11.0626C4.35072 11.0683 4.10413 11.5339 3.51764 11.5546C2.864 11.5778 1.91675 11.0626 1.91675 11.0626" stroke="#19AE57" stroke-width="0.839248" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14 13.4792C14 13.4792 13.11 14.0014 12.4841 14C11.8622 13.9986 11.601 13.481 10.9792 13.4792C10.3521 13.4775 10.0873 14.0022 9.46019 14C8.83943 13.9978 8.57911 13.4785 7.95835 13.4792C7.33984 13.48 7.08112 13.9963 6.46262 14C5.83329 14.0038 5.56689 13.4793 4.93755 13.4792C4.3082 13.4792 4.0418 14.0038 3.41246 14C2.79397 13.9963 1.91675 13.4792 1.91675 13.4792" stroke="#19AE57" stroke-width="1.20832" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.95857 6.83342C8.6259 6.83342 9.16689 6.29244 9.16689 5.6251C9.16689 4.95776 8.6259 4.41678 7.95857 4.41678C7.29123 4.41678 6.75024 4.95776 6.75024 5.6251C6.75024 6.29244 7.29123 6.83342 7.95857 6.83342Z" stroke="white" stroke-width="1.20832" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.3448 5.63627L4.3335 5.62497" stroke="white" stroke-width="1.20832" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.5948 5.63627L11.5835 5.62497" stroke="white" stroke-width="1.20832" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      userAnalytics: `<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.43372 4.60279C4.35957 4.60279 5.11011 3.85224 5.11011 2.92639C5.11011 2.00055 4.35957 1.25 3.43372 1.25C2.50787 1.25 1.75732 2.00055 1.75732 2.92639C1.75732 3.85224 2.50787 4.60279 3.43372 4.60279Z" stroke="white" stroke-width="0.754377" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M0.5 8.79377V7.11737C0.5 6.65444 0.875273 6.27917 1.3382 6.27917H5.52918C5.99212 6.27917 6.36738 6.65444 6.36738 7.11737V8.79377" stroke="white" stroke-width="0.754377" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.36743 1.25C6.72802 1.34233 7.04763 1.55204 7.27587 1.84609C7.50411 2.14013 7.628 2.50178 7.628 2.87401C7.628 3.24624 7.50411 3.60788 7.27587 3.90193C7.04763 4.19597 6.72802 4.40569 6.36743 4.49801" stroke="white" stroke-width="0.754377" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
      userIcon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_2403_7391)">
  <circle cx="20" cy="20" r="20" fill="white"/>
  </g>
  <circle cx="20" cy="20" r="19.6429" stroke="#7647EE" stroke-width="0.714286"/>
  <path d="M20 19.1667C21.8409 19.1667 23.3333 17.6743 23.3333 15.8333C23.3333 13.9924 21.8409 12.5 20 12.5C18.159 12.5 16.6667 13.9924 16.6667 15.8333C16.6667 17.6743 18.159 19.1667 20 19.1667Z" stroke="#7647EE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.3333 27.5V24.1667C13.3333 23.2462 14.0795 22.5 15 22.5H25C25.9205 22.5 26.6667 23.2462 26.6667 24.1667V27.5" stroke="#7647EE" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
  <filter id="filter0_i_2403_7391" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.0980392 0 0 0 0 0.682353 0 0 0 0 0.341176 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2403_7391"/>
  </filter>
  </defs>
  </svg>
  `,
      moneyIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.75 2.375C1.75 2.02982 2.02983 1.75 2.375 1.75H13.625C13.9702 1.75 14.25 2.02982 14.25 2.375V8.625C14.25 8.97019 13.9702 9.25 13.625 9.25H2.375C2.02983 9.25 1.75 8.97019 1.75 8.625V2.375Z" stroke="#FD561F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.25 11.75H1.75" stroke="#FD561F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.25 14.25H1.75" stroke="#FD561F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 6.75C8.69036 6.75 9.25 6.19036 9.25 5.5C9.25 4.80964 8.69036 4.25 8 4.25C7.30964 4.25 6.75 4.80964 6.75 5.5C6.75 6.19036 7.30964 6.75 8 6.75Z" stroke="#FD561F" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.26007 5.51007L4.25 5.5" stroke="#FD561F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.7601 5.51007L11.75 5.5" stroke="#FD561F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      usergroupIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.125 7.375C7.50571 7.375 8.625 6.25571 8.625 4.875C8.625 3.49429 7.50571 2.375 6.125 2.375C4.74429 2.375 3.625 3.49429 3.625 4.875C3.625 6.25571 4.74429 7.375 6.125 7.375Z" stroke="#EF5DA8" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.75 13.625V11.125C1.75 10.4346 2.30964 9.875 3 9.875H9.25C9.94037 9.875 10.5 10.4346 10.5 11.125V13.625" stroke="#EF5DA8" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.5 2.375C11.0378 2.51269 11.5144 2.82544 11.8548 3.26394C12.1951 3.70245 12.3799 4.24177 12.3799 4.79688C12.3799 5.35198 12.1951 5.8913 11.8548 6.32981C11.5144 6.76831 11.0378 7.08106 10.5 7.21875" stroke="#EF5DA8" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.375 9.875H13C13.6904 9.875 14.25 10.4346 14.25 11.125V13.625" stroke="#EF5DA8" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      paperIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.25 14.25H11.75C12.4404 14.25 13 13.6904 13 13V6.64277C13 6.31124 12.8683 5.99331 12.6339 5.75888L8.99113 2.11612C8.75669 1.88169 8.43875 1.75 8.10725 1.75H4.25C3.55964 1.75 3 2.30964 3 3V13C3 13.6904 3.55964 14.25 4.25 14.25Z" stroke="#15112D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.625 2.0625V6.125H12.375" stroke="#15112D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 11.125H9.875" stroke="#15112D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 8.625H9.875" stroke="#15112D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.5 6.125H6.125" stroke="#15112D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      diamondIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.75 6.75L4.25 3H11.75L14.25 6.75H1.75ZM1.75 6.75L8 13L1.75 6.75ZM1.75 6.75H14.25H1.75ZM8 13L14.25 6.75L8 13ZM8 13L10.5 6.75L8 3L5.5 6.75L8 13Z" stroke="#19AE57" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      helpIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25Z" stroke="#7647EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 11.9215V11.9062" stroke="#7647EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 9.5625C9.25 8.9375 10.5 8.13069 10.5 6.75C10.5 5.36929 9.38069 4.25 8 4.25C6.61929 4.25 5.5 5.36929 5.5 6.75" stroke="#7647EE" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      refreshIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2658_9540)">
  <path d="M8 4.25V6.125L5.5 3.625L8 1.125V3C10.7625 3 13 5.2375 13 8C13 8.98125 12.7125 9.89375 12.225 10.6625L11.3125 9.75C11.5938 9.23125 11.75 8.63125 11.75 8C11.75 5.93125 10.0687 4.25 8 4.25ZM3.775 5.3375L4.6875 6.25C4.4125 6.775 4.25 7.36875 4.25 8C4.25 10.0687 5.93125 11.75 8 11.75V9.875L10.5 12.375L8 14.875V13C5.2375 13 3 10.7625 3 8C3 7.01875 3.2875 6.10625 3.775 5.3375V5.3375Z" fill="#F7AD3C"/>
  </g>
  <defs>
  <clipPath id="clip0_2658_9540">
  <rect width="15" height="15" fill="white" transform="matrix(-1 0 0 1 15.5 0.5)"/>
  </clipPath>
  </defs>
  </svg>
  `,
      connectIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.25 1.75H6.75C6.40482 1.75 6.125 2.02982 6.125 2.375V4.875C6.125 5.22018 6.40482 5.5 6.75 5.5H9.25C9.59518 5.5 9.875 5.22018 9.875 4.875V2.375C9.875 2.02982 9.59518 1.75 9.25 1.75Z" stroke="#19AE57" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 11.75V9.25C3 8.90481 3.27982 8.625 3.625 8.625H12.375C12.7202 8.625 13 8.90481 13 9.25V11.75" stroke="#19AE57" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 14.25C3.69036 14.25 4.25 13.6904 4.25 13C4.25 12.3096 3.69036 11.75 3 11.75C2.30964 11.75 1.75 12.3096 1.75 13C1.75 13.6904 2.30964 14.25 3 14.25Z" stroke="#19AE57" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 14.25C13.6904 14.25 14.25 13.6904 14.25 13C14.25 12.3096 13.6904 11.75 13 11.75C12.3096 11.75 11.75 12.3096 11.75 13C11.75 13.6904 12.3096 14.25 13 14.25Z" stroke="#19AE57" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 14.25C8.69036 14.25 9.25 13.6904 9.25 13C9.25 12.3096 8.69036 11.75 8 11.75C7.30964 11.75 6.75 12.3096 6.75 13C6.75 13.6904 7.30964 14.25 8 14.25Z" stroke="#19AE57" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 5.5V11.75" stroke="#19AE57" stroke-width="1.13" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      launchIcon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.125 1.75H14.25V4.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.625 8.625V12.375C13.625 13.0654 13.0654 13.625 12.375 13.625H3.625C2.93464 13.625 2.375 13.0654 2.375 12.375V3.625C2.375 2.93464 2.93464 2.375 3.625 2.375H7.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.625 7.375L13.9375 2.0625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      whatsappIcon:
        '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="25px" height="25px" fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"/><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"/><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"/><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"/><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"/></svg>',
      securityShield: `<svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9275 3.41179L31.7133 7.03059C32.9206 7.43374 33.737 8.54281 33.7435 9.78572L33.8122 20.5768C33.8335 23.8482 32.6409 27.0208 30.4569 29.5067C29.4524 30.6476 28.1649 31.6276 26.5208 32.504L20.723 35.6033C20.5414 35.6989 20.3418 35.7483 20.1406 35.75C19.9394 35.7515 19.7381 35.7037 19.5582 35.6097L13.7064 32.5821C12.0443 31.72 10.7453 30.7544 9.73105 29.6294C7.51106 27.169 6.27756 24.0107 6.25629 20.7345L6.18754 9.95144C6.18104 8.70693 6.98265 7.5899 8.18344 7.17082L18.9284 3.42295C19.5664 3.19667 20.278 3.19189 20.9275 3.41179ZM26.0853 14.9803C25.6027 14.5166 24.8256 14.5198 24.3496 14.9899L18.8757 20.3854L16.6344 18.231C16.1518 17.7673 15.3764 17.7721 14.8987 18.2422C14.4226 18.7123 14.4275 19.4676 14.9101 19.9313L18.0233 22.927C18.2655 23.1597 18.5796 23.2744 18.8937 23.2713C19.2078 23.2696 19.5202 23.1517 19.7591 22.9159L26.0951 16.6694C26.5712 16.1993 26.5663 15.444 26.0853 14.9803Z" fill="#19AE57"/>
        </svg>
        `,
      securitySuccess: `<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="52" height="52" rx="26" fill="#19AE57"/>
        <path d="M14.3 26L22.1 33.8L37.7 18.2" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      securityGearMini: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2771_4132)">
        <path d="M7.55707 2.37233C7.602 1.87829 8.01622 1.5 8.51227 1.5H9.48772C9.98377 1.5 10.398 1.87829 10.4429 2.37233C10.4798 2.77794 10.7717 3.10907 11.1531 3.252C11.2511 3.28874 11.348 3.32793 11.4436 3.36947C11.821 3.53347 12.2648 3.50203 12.5809 3.23863C12.9715 2.91315 13.5458 2.93921 13.9053 3.29872L14.5938 3.98717C14.9365 4.32994 14.9614 4.87753 14.651 5.24994C14.3926 5.56012 14.3685 5.99809 14.5423 6.36256C14.6175 6.52039 14.6862 6.68194 14.748 6.84687C14.8909 7.22825 15.2221 7.52017 15.6277 7.55707C16.1217 7.602 16.5 8.01622 16.5 8.51227V9.48772C16.5 9.98377 16.1217 10.398 15.6277 10.4429C15.2221 10.4798 14.8909 10.7717 14.748 11.1531C14.6925 11.3011 14.6314 11.4465 14.5651 11.5888C14.404 11.9347 14.4301 12.3478 14.6743 12.6409C14.9715 12.9975 14.9477 13.5218 14.6195 13.85L13.85 14.6195C13.5218 14.9477 12.9975 14.9715 12.6409 14.6743C12.3478 14.4301 11.9347 14.404 11.5888 14.5651C11.4465 14.6314 11.3011 14.6925 11.1531 14.748C10.7717 14.8909 10.4798 15.2221 10.4429 15.6277C10.398 16.1217 9.98377 16.5 9.48772 16.5H8.51227C8.01622 16.5 7.602 16.1217 7.55707 15.6277C7.52017 15.2221 7.22825 14.8909 6.84688 14.748C6.68195 14.6862 6.5204 14.6175 6.36257 14.5423C5.99809 14.3685 5.56012 14.3926 5.24994 14.651C4.87753 14.9614 4.32994 14.9365 3.98716 14.5938L3.29872 13.9053C2.9392 13.5458 2.91315 12.9715 3.23863 12.5809C3.50204 12.2648 3.53347 11.821 3.36947 11.4436C3.32793 11.348 3.28875 11.2512 3.252 11.1531C3.10908 10.7717 2.77794 10.4798 2.37233 10.4429C1.87829 10.398 1.5 9.98377 1.5 9.48772V8.51227C1.5 8.01622 1.87829 7.602 2.37233 7.55707C2.77795 7.52017 3.10908 7.22826 3.25201 6.84688C3.2952 6.73162 3.34176 6.61801 3.39157 6.50617C3.56782 6.11037 3.53853 5.64193 3.26116 5.30908C2.92291 4.90318 2.94999 4.30634 3.32359 3.93274L3.93273 3.32359C4.30633 2.94999 4.90318 2.92291 5.30907 3.26116C5.64192 3.53854 6.11036 3.56782 6.50616 3.39157C6.61801 3.34176 6.73162 3.2952 6.84687 3.25201C7.22825 3.10908 7.52017 2.77795 7.55707 2.37233Z" stroke="#696677" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.25 9C11.25 10.2427 10.2427 11.25 9 11.25C7.75732 11.25 6.75 10.2427 6.75 9C6.75 7.75732 7.75732 6.75 9 6.75C10.2427 6.75 11.25 7.75732 11.25 9Z" stroke="#696677" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_2771_4132">
        <rect width="18" height="18" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,
      securityShieldMini: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.25 9.75V3.16666L3.70779 3.05418C4.97782 2.95618 6.22417 2.6566 7.4 2.16667L9 1.5L10.6 2.16667C11.7758 2.6566 13.0222 2.95618 14.2922 3.05418L15.75 3.16666V9.75C15.75 13.478 12.728 16.5 9 16.5C5.27208 16.5 2.25 13.478 2.25 9.75Z" stroke="#696677" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 9L7.875 10.875L12 6.75" stroke="#696677" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      dropDown: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8.5L12 16.5L20 8.5" stroke="#5C6F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      securityShieldSettings: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 13V4.22222L4.94372 4.07224C6.6371 3.94158 8.29889 3.54213 9.86666 2.88889L12 2L14.1333 2.88889C15.7011 3.54213 17.3629 3.94158 19.0563 4.07224L21 4.22222V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13Z" stroke="#15112D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12L10.5 14.5L16 9" stroke="#15112D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      closeBtn: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.8335 22.1673L22.1668 5.83398M5.8335 5.83398L22.1668 22.1673L5.8335 5.83398Z" stroke="black" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      pinIcon: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="4" fill="white"/>
  <rect x="0.5" y="0.5" width="39" height="39" rx="3.5" stroke="#979797" stroke-opacity="0.8"/>
  <path d="M20 14.6666V25.3333" stroke="#0B0C0E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.5425 16.0001L16 23.5426" stroke="#0B0C0E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.3333 20H14.6667" stroke="#0B0C0E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.5425 23.5425L16 16" stroke="#0B0C0E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
      bioIcon: `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 12H60C61.6569 12 63 13.3431 63 15V19.5M63 55.5V60C63 61.6569 61.6569 63 60 63H54M18 63H12C10.3431 63 9 61.6569 9 60V55.5M9 19.5V15C9 13.3431 10.3431 12 12 12H18" stroke="#0B0C0E" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M45 51C42.6015 53.8672 39.4507 54.9 36 54.9C32.5493 54.9 29.3985 53.8672 27 51" stroke="#0B0C0E" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 27.0586V27" stroke="#0B0C0E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M48 27.0586V27" stroke="#0B0C0E" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M39.5 42.9999L34.5 39.9999C34.5 39.9999 34 36.5382 34 33.9999C34 31.4616 34.5 26.9999 34.5 26.9999" stroke="#0B0C0E" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
    };
  };