"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MerItemThumbnail,
  MerItemThumbnailProps,
} from "@mercari/design-system-web-react";
import styles from "./page.module.css";

export const square128 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAG1BMVEVmZmb///95eXmfn5/r6+uMjIyysrLFxcXY2Ngbz5nxAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA4UlEQVRoge3SvQqDMBwE8CNS7WNkKV0dqm9Q6Bjs4CqV2rUUbDuKi6/dfxQ/oEocW7ifYuQwlxAEiIiIiIiIiP6KBnaJjGc9Zgoz4QLvCC9PQ6TRbQwPZiZckF/ts5LLC/vMj813uLQB0xZc5NtNCCUT5Y58Mwld2oIHYuxlLBFouwUzDVcUqDu8Uy0vQVKjLxjCFQVbjQKpXfuth4IxdBeUUJldEaoxQ8EQugsC0x5WZVct+4IxdBYomaTkwDN7boHpCiahs2DbvEqkxRPtb6m7gkm4klodEhEREREREf2yD66oKuca5VwhAAAAAElFTkSuQmCC";

export const rec128x196 =
  "data:application/octet-stream;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAxACAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8AsUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFXLGKzbzJr2YiOPGIU+/KTngHoBxyav63JHPp2kzpbxQeZFJ8kS4AAkIH14A5NAGJRVi0u3s3Z444WcjAMsYfb7gHjNa2mapcajqMFjfhLi3uHETKY1BTJxuUgcEZzQBg0Vq6RbRG+uhJGs7W8MkkcZGRIy9MjuOpx7Ui69qLOFLRSoTjyWgQofbbj+VAGXRWnqVh/wAT2a0soiTnKxA5KnaCV/A5H4VnRxvNKscalnchVUDkmgBtFWILZXvRb3Ey26gkO7chcZz06nj8a2Gls5vDmoJa2ypHBJCFlcZkfO7JJ7dBwOlAHP0Vb0u0F/qltas21ZZArEdh3/SrUuvXCylbJY7W2HCRLGp4/wBrIO4+uaAMqitXUkiubC11OKJIjKzRTJGMKJFwcgdsgjj2NWbiSbSZRp+nQ/6TGoNxMIw7lyMkA4+UDOOO4NAGDRVq8vbm7Ki6Kl0zz5aq3PqQAT+NVaACtbUv+QHov/XKX/0a1ZNXru8juNN063RWD2yOrkjg5csMfgaAKNbFon9jW41Cbi7kU/ZI+6548w+g9PU89qg0ebTbe4eXUI5ZNq/ulRA67vVgSMgelTXEmk3Vw8899qUkrnLMbZOf/H6AIdJhXdNeySyxxWihyYThySQAAe3J6+1XV8SqLlpDplqu4Y8yIbJh7h+ze+Kz7G9itHuIZI2ms512OudrYByGHXBGP5ipRFoqnebu9devli3VSfbdvI/HFAEeoW50+/jkgnd1dVnhlPDYPIz7g/yrXuALfTzrcUW27uVClRjEJbIMgHUbsHHoSfasqS/t7zVEnu4WW1jUIkEXOFUYVcnH4n3NLFq8h1OS6uV8yKf5JohwDH/dHpjAx6YFAGbWtZf8izq3/XW3/wDZ6zJRGJnEJYxbjsLjBI7ZA71bt7yOHSL60ZWMk7xMpA4G3dnP5igCCyupLG9guosb4nDgHocHpV6a20u4lM0GoLbRuc+TNE5ZPYFQQR+IrKrS8rRch/td8F7x/Z1J/wC+t+P0oAv3ctoug6dBAG8oXbne4wZAAuWI7cnAHoKTxHql0mt3lvbyPbwpM2VjYrubPLEjqf5CsvUL0XkkaxReTbwrsiiznaOpJPckkkmrct1p2phJb17i3uwoV5IohIsmBgMRkEHHXrmgBzTyapodxLdMZLi0dNkzHLFGyCpPfBwR+NY1aN1eWyWP2GwWTymcSSyygBpGGQOBnAGTxk9azqACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9k=";

const args: MerItemThumbnailProps = {
  size: "fluid",
  src: square128,
  alt: "Item image",
  itemName: "Item title",
  price: 3000,
  radius: true,
  hover: true,
};

export default function Home() {
  const [clickedStatus, setClickedStatus] = useState("not clicked");
  return (
    <main className={styles.main}>
      <a href="#">
        <div>
          <div>
            <MerItemThumbnail {...args} />
            <div data-testid="status">{clickedStatus}</div>
          </div>
        </div>
      </a>
      <a href="#" onClick={() => setClickedStatus("clicked")}>
        link
      </a>
    </main>
  );
}
