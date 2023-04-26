import React from "react";

export default function NotFound() {
  return (
    <main>
      <section class='error_section sec_ptb_140 clearfix'>
        <div class='container'>
          <div class='error_content text-center'>
            <h2 class='error_text d-flex align-items-center justify-content-center'>
              4{" "}
              <span>
                <img src='/assets/images/404.png' alt='image_not_found' />
              </span>{" "}
              4
            </h2>
            <h3>PAGE NOT FOUND</h3>
            <p>THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST</p>
            <a class='goback_home' href='/'>
              PLEASE RETURN TO HOME PAGE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
