import React from "react";
import MainImg from "../../assets/images/about_main.png";

const AboutTopSection = () => {
  return (
    <div className="mx-auto max-w-[1300px] px-4 md:px-5 lg:px-4">
      <div className="">
        <div className="mb-[25px] lg:mb-10">
          <img
            className="h-[208px] w-full md:h-[264px] lg:h-[456px]"
            src={MainImg}
            alt="Main Img"
          />
        </div>
        <div className="lg:flex">
          <h1 className="mb-5 w-1/2 text-[28px] font-medium leading-[105%] md:text-[34px] md:leading-[110%] lg:mb-0 lg:text-5xl">
            Глобал медикал трейд
          </h1>
          <div className="lg:w-1/2">
            <p className="mb-[10px] text-[12px] font-medium leading-[118%] md:text-sm lg:mb-4 lg:text-[16px] lg:leading-[140%]">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.
            </p>
            <p className="mb-[10px] text-[12px] font-medium leading-[118%] md:text-sm lg:mb-4 lg:text-[16px] lg:leading-[140%]">
              Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
              специалистам всю необходимую помощь в деле поставок медицинского
              оборудования. Наш каталог включает передовое оборудование
              от лучших производителей России, Европы, Азии и США.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTopSection;
