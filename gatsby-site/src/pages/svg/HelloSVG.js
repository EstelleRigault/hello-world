import React, { Component } from "react";

class HelloSVG extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="175"
        height="56"
        viewBox="0 0 175 56"
      >
        <path
          fill="#4F1F04"
          fill-rule="evenodd"
          d="M25.46875,24.65625 C25.46875,24.0729137 25.4531252,23.4427117 25.421875,22.765625 C25.3906248,22.0885383 25.2968758,21.4583363 25.140625,20.875 C24.9843742,20.2916637 24.739585,19.8125019 24.40625,19.4375 C24.072915,19.0624981 23.6145863,18.875 23.03125,18.875 C22.4270803,18.875 21.755212,19.0364567 21.015625,19.359375 C20.276038,19.6822933 19.4375047,20.2395794 18.5,21.03125 L18.5,36.84375 C18.5,37.4270863 18.5468745,37.9010398 18.640625,38.265625 C18.7343755,38.6302102 18.8906239,38.9322905 19.109375,39.171875 C19.3281261,39.4114595 19.6249981,39.6041659 20,39.75 C20.3750019,39.8958341 20.8437472,40.0312494 21.40625,40.15625 L21.75,44.46875 C18.8749856,44.3645828 16.5885502,44.2812503 14.890625,44.21875 C13.1926998,44.1562497 12.0416697,44.125 11.4375,44.125 C9.79165844,44.125 8.16667469,44.1562497 6.5625,44.21875 C4.95832531,44.2812503 3.34375813,44.3645828 1.71875,44.46875 L1.875,40.1875 C2.56250344,40.0833328 3.13020609,39.9687506 3.578125,39.84375 C4.02604391,39.7187494 4.38541531,39.5104181 4.65625,39.21875 C4.92708469,38.9270819 5.11458281,38.5208359 5.21875,38 C5.32291719,37.4791641 5.375,36.7604213 5.375,35.84375 L5.375,7.03125 C5.375,6.1979125 5.34375031,5.5312525 5.28125,5.03125 L0,5.03125 L0,1.5 C4.08335375,0.499995 8.24997875,0 12.5,0 L14.375,0 C15.2500044,0 15.9531223,0.0468745312 16.484375,0.140625 C17.0156277,0.234375469 17.4322902,0.40624875 17.734375,0.65625 C18.0364598,0.90625125 18.2395828,1.26562266 18.34375,1.734375 C18.4479172,2.20312734 18.5,2.81249625 18.5,3.5625 L18.5,16.5625 C20.1250081,15.4374944 21.8958237,14.5156286 23.8125,13.796875 C25.7291763,13.0781214 27.6666569,12.71875 29.625,12.71875 C31.1666744,12.71875 32.4999944,12.9791641 33.625,13.5 C34.7500056,14.0208359 35.6770797,14.7656202 36.40625,15.734375 C37.1354203,16.7031298 37.6770816,17.8854097 38.03125,19.28125 C38.3854184,20.6770903 38.5625,22.2499913 38.5625,24 L38.5625,36.375 C38.5625,37.7291734 38.6562491,38.7812463 38.84375,39.53125 L43,39.53125 L43.40625,43.40625 C39.4270634,44.3437547 35.7396003,44.8125 32.34375,44.8125 C27.6353931,44.8125 25.28125,43.6979278 25.28125,41.46875 C25.28125,41.1770819 25.2916666,40.7656277 25.3125,40.234375 C25.3333334,39.7031223 25.3541666,39.1458363 25.375,38.5625 C25.3958334,37.9791637 25.4166666,37.4166694 25.4375,36.875 C25.4583334,36.3333306 25.46875,35.895835 25.46875,35.5625 L25.46875,24.65625 Z M65.375,25.6875 L65.375,25.125 C65.375,24.0624947 65.2916675,23.0781295 65.125,22.171875 C64.9583325,21.2656205 64.7187516,20.4843783 64.40625,19.828125 C64.0937484,19.1718717 63.7031273,18.6562519 63.234375,18.28125 C62.7656227,17.9062481 62.2395863,17.71875 61.65625,17.71875 C59.3437384,17.71875 57.9375025,20.3749734 57.4375,25.6875 L65.375,25.6875 Z M66.71875,38.84375 C69.3229297,38.84375 72.2395672,38.0520912 75.46875,36.46875 L76.03125,41.15625 C72.6145662,43.5937622 68.1979438,44.8125 62.78125,44.8125 C59.9062356,44.8125 57.3177198,44.4531286 55.015625,43.734375 C52.7135302,43.0156214 50.7500081,41.9635486 49.125,40.578125 C47.4999919,39.1927014 46.2500044,37.4895934 45.375,35.46875 C44.4999956,33.4479066 44.0625,31.1354297 44.0625,28.53125 C44.0625,26.2187384 44.5104122,24.0937597 45.40625,22.15625 C46.3020878,20.2187403 47.5729084,18.5520903 49.21875,17.15625 C50.8645916,15.7604097 52.8437384,14.6718789 55.15625,13.890625 C57.4687616,13.1093711 60.0520691,12.71875 62.90625,12.71875 C65.0520941,12.71875 67.0208244,12.9999972 68.8125,13.5625 C70.6041756,14.1250028 72.1510352,14.9270781 73.453125,15.96875 C74.7552148,17.0104219 75.7708297,18.2864508 76.5,19.796875 C77.2291703,21.3072992 77.59375,23.0104072 77.59375,24.90625 C77.59375,26.0312556 77.463543,26.9479131 77.203125,27.65625 C76.942707,28.3645869 76.5208363,28.9166647 75.9375,29.3125 C75.3541637,29.7083353 74.6093795,29.9739577 73.703125,30.109375 C72.7968705,30.2447923 71.6875066,30.3125 70.375,30.3125 L57.46875,30.3125 C57.9479191,32.9375131 58.9479091,35.0156173 60.46875,36.546875 C61.9895909,38.0781327 64.0729034,38.84375 66.71875,38.84375 Z M77.375,1.4375 C81.4166869,0.479161875 85.3853972,0 89.28125,0 C90.2187547,0 91.0156217,0.0260414063 91.671875,0.078125 C92.3281283,0.130208594 92.9010392,0.223957656 93.390625,0.359375 C93.8802108,0.494792344 94.3177064,0.697915313 94.703125,0.96875 C95.0885436,1.23958469 95.4687481,1.59374781 95.84375,2.03125 L95.84375,37.03125 C95.84375,38.3020897 95.9062494,39.1562478 96.03125,39.59375 L101,39.59375 L101,43.0625 C97.2083144,43.9583378 93.4271022,44.40625 89.65625,44.40625 C87.8854078,44.40625 86.4479222,44.1822939 85.34375,43.734375 C84.2395778,43.2864561 83.3333369,42.562505 82.625,41.5625 L82.625,40.75 C82.6666669,39.9166625 82.7031248,39.0468795 82.734375,38.140625 C82.7656252,37.2343705 82.78125,36.281255 82.78125,35.28125 L82.78125,7.40625 C82.78125,6.92708094 82.7708334,6.48437703 82.75,6.078125 C82.7291666,5.67187297 82.6979169,5.31250156 82.65625,5 L77.375,5 L77.375,1.4375 Z M99.1875,1.4375 C103.229187,0.479161875 107.197897,0 111.09375,0 C112.031255,0 112.828122,0.0260414063 113.484375,0.078125 C114.140628,0.130208594 114.713539,0.223957656 115.203125,0.359375 C115.692711,0.494792344 116.130206,0.697915313 116.515625,0.96875 C116.901044,1.23958469 117.281248,1.59374781 117.65625,2.03125 L117.65625,37.03125 C117.65625,38.3020897 117.718749,39.1562478 117.84375,39.59375 L122.8125,39.59375 L122.8125,43.0625 C119.020814,43.9583378 115.239602,44.40625 111.46875,44.40625 C109.697908,44.40625 108.260422,44.1822939 107.15625,43.734375 C106.052078,43.2864561 105.145837,42.562505 104.4375,41.5625 L104.4375,40.75 C104.479167,39.9166625 104.515625,39.0468795 104.546875,38.140625 C104.578125,37.2343705 104.59375,36.281255 104.59375,35.28125 L104.59375,7.40625 C104.59375,6.92708094 104.583333,6.48437703 104.5625,6.078125 C104.541667,5.67187297 104.510417,5.31250156 104.46875,5 L99.1875,5 L99.1875,1.4375 Z M159.96875,28.875 C159.96875,31.6666806 159.442714,34.06249 158.390625,36.0625 C157.338536,38.06251 155.953134,39.7135352 154.234375,41.015625 C152.515616,42.3177148 150.541678,43.2760386 148.3125,43.890625 C146.083322,44.5052114 143.802095,44.8125 141.46875,44.8125 C138.73957,44.8125 136.234386,44.442712 133.953125,43.703125 C131.671864,42.963538 129.71355,41.9062569 128.078125,40.53125 C126.4427,39.1562431 125.17188,37.4843848 124.265625,35.515625 C123.35937,33.5468652 122.90625,31.3333456 122.90625,28.875 C122.90625,26.0624859 123.432286,23.6406352 124.484375,21.609375 C125.536464,19.5781148 126.932283,17.9010483 128.671875,16.578125 C130.411467,15.2552017 132.390614,14.2812531 134.609375,13.65625 C136.828136,13.0312469 139.114572,12.71875 141.46875,12.71875 C144.19793,12.71875 146.697905,13.0937462 148.96875,13.84375 C151.239595,14.5937538 153.187492,15.671868 154.8125,17.078125 C156.437508,18.484382 157.70312,20.1822817 158.609375,22.171875 C159.51563,24.1614683 159.96875,26.3958209 159.96875,28.875 Z M136.46875,28.84375 C136.46875,32.4687681 136.869788,35.1562413 137.671875,36.90625 C138.473962,38.6562587 139.729158,39.53125 141.4375,39.53125 C143.229176,39.53125 144.505205,38.6198008 145.265625,36.796875 C146.026045,34.9739492 146.40625,32.3229341 146.40625,28.84375 C146.40625,25.1353981 146.005212,22.4010505 145.203125,20.640625 C144.401038,18.8801995 143.145842,18 141.4375,18 C139.666658,18 138.395837,18.8854078 137.625,20.65625 C136.854163,22.4270922 136.46875,25.1562316 136.46875,28.84375 Z M167.5625,32.9375 C169.833345,32.9375 171.557286,33.60416 172.734375,34.9375 C173.911464,36.27084 174.5,38.104155 174.5,40.4375 C174.5,41.9583409 174.250002,43.3906183 173.75,44.734375 C173.249998,46.0781317 172.510422,47.3749938 171.53125,48.625 C170.552078,49.8750062 169.333341,51.0937441 167.875,52.28125 C166.416659,53.4687559 164.71876,54.6666606 162.78125,55.875 L159.84375,52.96875 C162.260429,50.6562384 164.041661,47.8645997 165.1875,44.59375 C163.812493,44.3020819 162.713546,43.656255 161.890625,42.65625 C161.067704,41.656245 160.65625,40.3750078 160.65625,38.8125 C160.65625,37.9166622 160.843748,37.1041703 161.21875,36.375 C161.593752,35.6458297 162.098955,35.0260442 162.734375,34.515625 C163.369795,34.0052058 164.104163,33.6145847 164.9375,33.34375 C165.770837,33.0729153 166.645829,32.9375 167.5625,32.9375 Z"
        />
      </svg>
    );
  }
}

export default HelloSVG;
