import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
  private _renderer2: Renderer2,
  @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

        let script = this._renderer2.createElement('script');
        script.type = `application/ld+json`;
        script.text = `  var Comm100API=Comm100API||{};(function(t){function e(e){var a=document.createElement("script"),c=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=e+t.site_id,c.parentNode.insertBefore(a,c)}t.chat_buttons=t.chat_buttons||[],t.chat_buttons.push({code_plan:"deb0dfda-a788-4815-9dd8-edbb37ece352",div_id:"comm100-button-deb0dfda-a788-4815-9dd8-edbb37ece352"}),t.site_id=10100527,t.main_code_plan="deb0dfda-a788-4815-9dd8-edbb37ece352",e("https://vue.comm100.com/livechat.ashx?siteId="),setTimeout(function(){t.loaded||e("https://standby.comm100vue.com/livechat.ashx?siteId=")},5e3)})(Comm100API||{})`;

  }

}
