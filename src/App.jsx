import React, { useState } from "react";
import Logo from "../public/assets/Logo.svg";
import Carousel from "./Carousel";
import Products from "./Category";
import Cabinet from "./Cabinet";

const App = () => {
  return (
    <div>
      <div class=" hidden py-[5px] text-[#7A7687] md:block">
        <div class="mx-auto flex w-full max-w-[1300px] items-center justify-between px-5">
          <div class="flex items-center gap-3 text-[10px] xl:text-[12px]">
            <p>О компании</p>
            <p>Доставка</p>
            <p>Оплата</p>
            <p>Гарантии</p>
            <p>Блог</p>
          </div>
          <div class="flex items-center gap-6 text-[10px] xl:text-[12px]">
            <a href="/mailto : info@mail.ru">info@mail.ru</a>
            <address class="not-italic">
              <span>г. Москва, ул. Московская, д. 35</span>
            </address>
          </div>
        </div>
      </div>
      <div class="hidden h-[1px] w-full bg-[#E5E2EE] sm:block "></div>
      <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between mt-5 gap-5 px-5">
        <div className="flex gap-[40px]">
          <img src={Logo} alt="Logo img" />
          <div class="flex items-center rounded-[50px] bg-[#D5D1E1] pr-[20px] text-[12px] xl:text-[14px] rounded-l-[50px] w-[400px]    ">
            <div class="mr-2 flex items-center rounded-l-[50px] rounded-r-[50px] bg-white">
              <select class="w-[40%] rounded-[50px] bg-[#EFEFEF] px-[15px] py-[10px] text-[#7A7687] outline-none sm:w-[30%]">
                <option value="Все категории">Все категории</option>
                <option value="Хирургия">Хирургия</option>
                <option value="Офтальмология">Офтальмология</option>
                <option value="Лабораторная диагностика">
                  Лабораторная диагностика
                </option>
                <option value="Акушерство">Акушерство</option>
                <option value="Гинекология">Гинекология</option>
                <option value="Гистология">Гистология</option>
                <option value="Косметология">Косметология</option>
                <option value="Оториноларингология">Оториноларингология</option>
                <option value="Рентгенология и томография">
                  Рентгенология и томография
                </option>
                <option value="Стерилизация">Стерилизация</option>
                <option value="Физиотерапия и реабилитация">
                  Физиотерапия и реабилитация
                </option>
                <option value="Функциональная диагностика">
                  Функциональная диагностика
                </option>
                <option value="Эндоскопия">Эндоскопия</option>
              </select>
              <input
                type="text"
                placeholder="Поиск"
                class="mr-2 block px-[15px] py-[8px] text-[#7A7687] outline-none"
              ></input>
            </div>
            <label for="poisk" class="cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="23"
                width="23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
              </svg>
            </label>
          </div>
          <div>
            <p class="hidden text-[12px] text-[#7A7687] xl:block">
              Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
            </p>
          </div>
        </div>
        <div class="flex gap-4">
          <button class="flex-col items-center text-[#7A7687] hover:text-[#07745e] flex">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
            </svg>
            <span class="mt-1 hidden lg:block">Войти</span>
          </button>
          <a
            class="flex flex-col items-center text-[#7A7687] hover:text-[#07745e]"
            href="/favorite"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
            </svg>
            <span class="mt-1 hidden lg:block">Избранное</span>
          </a>
          <a
            class="flex flex-col items-center text-[#7A7687] hover:text-[#07745e]"
            href="/compare"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"></path>
            </svg>
            <span class="mt-1 hidden lg:block">Сравнить</span>
          </a>
          <a
            class="flex flex-col items-center text-[#7A7687] hover:text-[#07745e]"
            href="/korzina"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="23"
              width="23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
            <span class="mt-1 hidden lg:block">Корзина</span>
          </a>
        </div>
      </div>
      <div class="hidden h-[1px] w-full bg-[#E5E2EE] sm:block  mt-3 "></div>
      <nav>
        <div class="mx-auto flex w-full max-w-[1300px] items-center justify-between px-5 pt-5">
          <div class="flex items-center gap-2 xl:gap-4">
            <a
              class="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
              href="/catalog"
            >
              Каталог
            </a>
            <a
              class="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
              href="/"
            >
              Производители
            </a>
            <a
              class="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
              href="/"
            >
              Кабинеты под ключ
            </a>
            <a
              class="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
              href="/"
            >
              Услуги
            </a>
            <a
              class="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
              href="/"
            >
              Акции
            </a>
            <a
              class="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
              href="/"
            >
              Покупателям
            </a>
            <a
              class="text-[12px] font-semibold text-[#202020] duration-150 hover:text-[#07745E] xl:text-[14px]"
              href="/"
            >
              Контакты
            </a>
          </div>
          <div class="flex items-center gap-2">
            <address class="flex items-center gap-[2px] not-italic">
              <p>Москва</p>
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Location_On">
                    <g>
                      <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                      <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </address>
            <a
              class="hidden rounded-[50px] border-[2px] border-[#D5D1E1] px-5 py-[11px] text-[#202020] xl:block hover:border-[#07745E] duration-150 focus:bg-[#E1EFE6] focus:text-[#07745E]"
              href="tel: +7(495)000-00-00"
            >
              +7(495)000-00-00
            </a>
            <a
              class="rounded-full border-[1px] bg-[#088269] p-[9px] text-[#F8F7F3] lg:rounded-[50px] lg:px-5 lg:py-[11px] hover:bg-[#066753] duration-150"
              href="tel: +7(495)000-00-00"
            >
              <span class="hidden xl:block">Заказать звонок</span>
              <span class="block xl:hidden">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </nav>
      <div class="hidden h-[1px] w-full bg-[#E5E2EE] sm:block  mt-3 "></div>
      <div>
        <Carousel />
      </div>
      <div>
        <Products />
        <Cabinet />
      </div>
    </div>
  );
};

export default App;
