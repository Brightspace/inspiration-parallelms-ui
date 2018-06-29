import '@polymer/polymer/polymer-element.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
        .card {
            margin: 24px;
            padding: 16px;
            color: #757575;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        .circle {
            display: inline-block;
            width: 64px;
            height: 64px;
            text-align: center;
            color: #555;
            border-radius: 50%;
            background: #ddd;
            font-size: 30px;
            line-height: 64px;
        }


        .noteBox {
            position: relative;
            padding-top: .25em;
            padding-bottom: .25em;
            padding-left:	.65em;
            padding-right: .65em;
            margin: 0 auto;
            background-color: #FFFFA5;
            -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
            -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1);
        }

        .notebox:before, .box:after {
            position: absolute;
            width: 40%;
            height: 10%;
            content: ' ';
            left: .2px;
            bottom: .2px;
            background: transparent;
            -webkit-transform: skew(-5deg) rotate(-5deg);
            -moz-transform: skew(-5deg) rotate(-5deg);
            -ms-transform: skew(-5deg) rotate(-5deg);
            -o-transform: skew(-5deg) rotate(-5deg);
            transform: skew(-5deg) rotate(-5deg);
            -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            -moz-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            z-index: -1;
        }

        h1 {
            margin: 16px 0;
            color: #212121;
            font-size: 22px;
        }

        .card-header {
            background:#006FBF;
            color:white;
        }

        .medium-card-size {
            width: 100%;
            max-height: 650px;
            overflow-y: scroll;
        }

        .card-header-text {
            margin:0;
            padding:10px;
            font-weight:normal;
        }

        .flex-parent {
            display:flex;
        }
        .flex-1 {
            flex: 1;
        }
        .flex-2 {
            flex: 2;
        }
        .flex-right {
            display: inline-block;
        }
        .basic-left-padding {
            padding-left: 10px
        }
        .basic-right-padding {
            padding-left: 10px
        }
        .basic-top-bottom-padding {
            padding-top: 10px;
            padding-bottom: 10px;
        }

            /* Original Author:
            https://github.com/daneden/animate.css/ */
            @-webkit-keyframes bounceOutRight {
                20% {
                    opacity: 1;
                    -webkit-transform: translate3d(-20px, 0, 0);
                    transform: translate3d(-20px, 0, 0);
                }

                100% {
                    opacity: 0;
                    -webkit-transform: translate3d(2000px, 0, 0);
                    transform: translate3d(2000px, 0, 0);
            }
            }

            /* Original Author:
            https://github.com/daneden/animate.css/ */
            @keyframes bounceOutRight {
                20% {
                    opacity: 1;
                    -webkit-transform: translate3d(-20px, 0, 0);
                    transform: translate3d(-20px, 0, 0);
                }

                100% {
                    opacity: 0;
                    -webkit-transform: translate3d(2000px, 0, 0);
                    transform: translate3d(2000px, 0, 0);
                }
            }

            /* Original Author:
            https://github.com/daneden/animate.css/ */
            .bounceOutRight {
                -webkit-animation-name: bounceOutRight;
                animation-name: bounceOutRight;
            }

            .animated {
                animation-duration: 3s;
            }

            .invisible {
                opacity: 0 !important;
            }

            /* Original Author:
            https://github.com/daneden/animate.css/ */
            @-webkit-keyframes bounceInLeft {
                0%, 60%, 75%, 90%, 100% {
                    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                }

                0% {
                    opacity: 0;
                    -webkit-transform: translate3d(-3000px, 0, 0);
                    transform: translate3d(-3000px, 0, 0);
                }

                60% {
                    opacity: 1;
                    -webkit-transform: translate3d(25px, 0, 0);
                    transform: translate3d(25px, 0, 0);
                }

                75% {
                    -webkit-transform: translate3d(-10px, 0, 0);
                    transform: translate3d(-10px, 0, 0);
                }

                90% {
                    -webkit-transform: translate3d(5px, 0, 0);
                    transform: translate3d(5px, 0, 0);
                }

                100% {
                    -webkit-transform: none;
                    transform: none;
                }
            }

            /* Original Author:
            https://github.com/daneden/animate.css/ */
            @keyframes bounceInLeft {
                0%, 60%, 75%, 90%, 100% {
                    -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                }

                0% {
                    opacity: 0;
                    -webkit-transform: translate3d(-3000px, 0, 0);
                    transform: translate3d(-3000px, 0, 0);
                }

                60% {
                    opacity: 1;
                    -webkit-transform: translate3d(25px, 0, 0);
                    transform: translate3d(25px, 0, 0);
                }

                75% {
                    -webkit-transform: translate3d(-10px, 0, 0);
                    transform: translate3d(-10px, 0, 0);
                }

                90% {
                    -webkit-transform: translate3d(5px, 0, 0);
                    transform: translate3d(5px, 0, 0);
                }

                100% {
                    -webkit-transform: none;
                    transform: none;
                }
            }

            /* Original Author:
            https://github.com/daneden/animate.css/ */
            .bounceInLeft {
                -webkit-animation-name: bounceInLeft;
                animation-name: bounceInLeft;
            }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/* shared styles for all views */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

