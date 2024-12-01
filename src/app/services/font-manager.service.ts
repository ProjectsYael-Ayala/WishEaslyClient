import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontManagerService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

   /**
   * החלת פונט על אלמנט מסוים.
   * @param elementId מזהה (id) של האלמנט.
   * @param fontFamily שם הפונט (לדוגמה: 'Roboto').
   * @param fontUrl כתובת ה-URL לטעינת הפונט (אם נדרש).
   */
   setFontOnElement(elementId: string, fontFamily: string, fontUrl: string): void {
    if (fontUrl) {
      this.addFontToHead(fontUrl); // טעינת הפונט אם יש צורך
    }

    const element = document.getElementById(elementId);
    if (element) {
      this.renderer.setStyle(element, 'font-family', fontFamily); // החלת הפונט על האלמנט
    }
  }

  /**
   * הוספת קישור לטעינת הפונט ל-<head>.
   * @param fontUrl כתובת ה-URL לטעינת הפונט.
   */
  private addFontToHead(fontUrl: string): void {
    const linkExists = document.querySelectorAll(`link[href="${fontUrl}"]`).length > 0;
    if (!linkExists) {
      const link = this.renderer.createElement('link');
      this.renderer.setAttribute(link, 'rel', 'stylesheet');
      this.renderer.setAttribute(link, 'href', fontUrl);
      this.renderer.appendChild(document.head, link);
    }
  }
}
