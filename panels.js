const panels = document.querySelectorAll(".panel");

      panels.forEach((panel) => {
        panel.addEventListener("mousemove", (e) => {
          const rect = panel.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const width = rect.width;
          const height = rect.height;

          const marginX = width * 0.2;
          const marginY = height * 0.2;

          const inCenterX = x > marginX && x < width - marginX;
          const inCenterY = y > marginY && y < height - marginY;

          if (inCenterX && inCenterY) {
            panel.classList.add("open");
            panel.classList.add("open-active");
          } else {
            panel.classList.remove("open");
            panel.classList.remove("open-active");
          }
        });

        panel.addEventListener("mouseleave", () => {
          panel.classList.remove("open");
          panel.classList.remove("open-active");
        });
      });