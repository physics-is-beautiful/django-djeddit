import { createGlobalStyle } from 'styled-components'

const DjedditStyle = createGlobalStyle`
  html, body {
  height: 100%;
}

body {
  background: #f6f6f6;
  font-family: "Museosansrounded", sans-serif;
  font-size: 1.2rem;
}

#wrap {
  min-height: 100%;
}

footer {
  position: relative;
  margin-top: -50px;
  /* negative value of footer height */
  height: 50px;
  clear: both;
  padding-top: 10px;
}

.wordwrap, .post-content {
  white-space: pre-wrap;
  /* CSS3 */
  white-space: -moz-pre-wrap;
  /* Firefox */
  white-space: -pre-wrap;
  /* Opera <7 */
  white-space: -o-pre-wrap;
  /* Opera 7 */
  word-wrap: break-word;
  /* IE */
}

.theme-dropdown .dropdown-menu {
  position: static;
  display: block;
  margin-bottom: 20px;
}

.theme-showcase > p > .btn {
  margin: 5px 0;
}

.theme-showcase .navbar .container {
  width: auto;
}

.navbar {
  position: relative;
}

.inline {
  display: inline-block;
}

.break-word {
  word-wrap: break-word;
}

.hover-point, .count-box {
  cursor: pointer;
}

.color-primary {
  color: #337ab7;
}

h6, .text-muted {
  line-height: 0;
}

.full-line {
  line-height: 1;
}

.count-box {
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align: center;
  float: right;
}

.count-box-score {
  font-size: 18px;
  line-height: 2.4;
}

.count-box-context {
  font-size: smaller;
}

.op-container, .post-container {
  padding-top: 10px;
  margin-top: 10px;
  margin-left: 10px;
}

.post-container {
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  padding: 5px;
}

.post-content {
  margin: 12px 0;
}

.post-callout {
  width: 100%;
}

.fa-plus-square-o, .fa-minus-square-o {
  cursor: pointer;
}

.nav-tabs {
  padding: 0 15px;
}

.btn-group-xs.fixed-50 > .btn {
  width: 50px;
}

.btn-group-xs.fixed-80 > .btn {
  width: 80px;
}

.btn.btn-width-auto {
  width: auto !important;
}

.breadcrumb {
  background-color: transparent;
}

.col-icon > .fa-stack {
  margin-top: 15px;
}
.col-icon > .fa-stack .fa-stack-2x {
  color: #eeeeee;
}
.col-icon > .fa-stack .fa-stack-1x {
  color: #555555;
}

.col-icon {
  display: flex;
  align-items: center;
}

.post-heading h3, .post-heading h4, .post-heading h5, .post-heading h6 {
  display: inline;
  margin-left: 5px;
}

.vertical-align {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.bootstrap-select {
  max-width: 100%;
}

@media only screen and (max-width: 500px) {
  .djeddit-date-silly {
    display: inline;
  }

  .djeddit-date-verbose {
    display: none;
  }
}
@media only screen and (min-width: 501px) {
  .djeddit-date-silly {
    display: none;
  }

  .djeddit-date-verbose {
    display: inline;
  }
}
/* Small Devices, Tablets */
@media only screen and (min-width: 769px) {
  .list-group-item-main-col {
    padding-left: 0;
  }

  .count-box-small {
    display: none;
  }

  .djeddit-thread-item-icon {
    padding: 5px;
  }

  .djeddit-count-box-overflow {
    display: none;
  }

  .djeddit-score, .djeddit-score-op {
    display: none;
  }

  .djeddit-score-large {
    display: flex;
  }

  .djeddit-thread-form > div {
    padding-bottom: 1em;
  }

  .post-callout {
    padding-left: 1em;
  }
}
@media only screen and (max-width: 768px) {
  .list-group-item-main-col {
    padding-left: 15px;
  }

  .hide-sm {
    visibility: hidden;
  }

  #main {
    padding: 0 0 0 0;
  }

  #main h2 {
    padding: 10px;
  }

  #main .djeddit-topic-description {
    padding: 10px;
  }

  .count-box {
    display: none;
  }

  .djeddit-count-box-overflow {
    display: inline;
  }

  .count-box-small {
    display: inline;
  }

  .list-group-item-main-col {
    width: 100%;
  }

  .djeddit-score, .djeddit-score-op {
    display: inline;
  }

  .djeddit-score-large {
    display: none !important;
  }

  #discussion-title {
    margin-left: 15px;
  }

  .discussion-toolbar {
    padding-left: 15px;
  }

  .djeddit-thread-form {
    padding-left: 15px;
    padding-right: 15px;
  }

  .djeddit-thread-form > div {
    padding-bottom: 0.5em;
  }

  .djeddit-callout .minicol {
    display: none;
  }

  .row, #comments-callout {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .breadcrumb {
    margin: 15px;
    padding: 0;
  }

  #comments-callout {
    margin-left: -15px;
    margin-right: -15px;
  }

  .post-callout {
    padding-left: 0;
  }
}
/* Medium Devices, Desktops */
.djeddit-score {
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 5px;
}

.djeddit-created-by {
  display: inline;
}

.djeddit-score-upvote, .djeddit-score-downvote {
  margin: 0px 2px;
}

.djeddit-thread-item-footer, .djeddit-post-item-footer {
  line-height: normal;
}

.djeddit-score-upvote.color-primary, .djeddit-score-upvote-large.color-primary {
  color: #5cb85c;
}

.djeddit-score-downvote.color-primary, .djeddit-score-downvote-large.color-primary {
  color: #d9534f;
}

.djeddit-score-number-large.color-upvote, .djeddit-score-number.color-upvote {
  color: #5cb85c;
}

.djeddit-score-number-large.color-downvote, .djeddit-score-number.color-downvote {
  color: #d9534f;
}

.djeddit-score-large {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.djeddit-score-large > div {
  padding: 3px;
  font-family: Museosansrounded, sans-serif;
}

.djeddit-created-by a, .post-container a {
  color: inherit;
}

.list-group-item {
  cursor: pointer;
}

.list-group-item h4 {
  font-weight: bold;
  color: #333;
}

.discussion-toolbar {
  padding-bottom: 1em;
}

.discussion-toolbar i {
  padding-left: 0.5em;
}

.djeddit-score-container {
  max-width: 4em;
}

.djeddit-post-item-footer .djeddit-score {
  display: inline;
}

.djeddit-topic-container {
  max-width: 5em;
}

.djeddit-topic-description {
  padding-bottom: 0.5em;
}

.discussion-toolbar .tooltip-inner {
  width: 20em;
  font-family: "Museosansrounded", sans-serif;
}

.djeddit-callout {
  display: flex;
}

#main .bs-callout-main {
  border: none;
}

#main .row {
  margin: 0 !important;
}

.postcol {
  width: 100%;
}

.bs-callout {
  padding: 10px 20px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #fff;
}
.bs-callout textarea {
  resize: vertical;
  height: 140px;
}

.bs-callout h4 {
  margin-top: 0;
  margin-bottom: 5px;
}

.bs-callout p:last-child {
  margin-bottom: 0;
}

.bs-callout code {
  border-radius: 3px;
}

.bs-callout + .bs-callout {
  margin-top: -5px;
}

.bs-callout-default {
  border-left-color: #777;
}

.bs-callout-default h4 {
  color: #777;
}

.bs-callout-primary {
  border-left-color: #428bca;
}

.bs-callout-primary h4 {
  color: #428bca;
}

.bs-callout-success {
  border-left-color: #5cb85c;
}

.bs-callout-success h4 {
  color: #5cb85c;
}

.bs-callout-danger {
  border-left-color: #d9534f;
}

.bs-callout-danger h4 {
  color: #d9534f;
}

.bs-callout-warning {
  border-left-color: #f0ad4e;
}

.bs-callout-warning h4 {
  color: #f0ad4e;
}

.bs-callout-info {
  border-left-color: #5bc0de;
}

.bs-callout-info h4 {
  color: #5bc0de;
}

.bs-callout-heading {
  margin-left: 15px;
}
.bs-callout-heading h3, .bs-callout-heading h4, .bs-callout-heading h5, .bs-callout-heading h6 {
  display: inline;
}

.minicol {
  float: left;
  margin: 10px 0;
  text-align: center;
}
.minicol .glyphicon {
  display: block;
}
.minicol .post-score {
  margin-bottom: 0;
  margin-top: 3px;
  line-height: 1.3;
}

.glyphicon-chevron-up-op {
  margin-bottom: 7px;
}

.postcol {
  display: inline-block;
  margin-left: 10px;
  margin-top: 5px;
}

.callout-title {
  line-height: 1;
  margin-top: 5px !important;
  padding-left: 15px;
  padding-right: 15px;
}

`

export default DjedditStyle
