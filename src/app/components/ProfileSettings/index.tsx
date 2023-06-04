"use client";
import {
  CaretRight,
  UserCircle,
  Key,
  Bell,
  PersonArmsSpread,
  Devices,
  UserSwitch,
  Question,
  SignOut,
} from "@phosphor-icons/react";
import Image from "next/image";

export const ProfileSettings: React.FC = () => {
  return (
    <div className="bg-gray500 w-[375px] h-[584px] rounded-xl	p-6 flex flex-col gap-[16px]">
      <div className="flex gap-4">
        <Image
          className="rounded-lg"
          width={48}
          height={48}
          src="https://www.github.com/oyaksaile.png"
          alt="Kayo Elias"
        />
        <div>
          <h1 className="font-bold text-gray100">Kayo Elias</h1>
          <p className="text-gray200 text-sm">contatodevkayo@gmail.com</p>
        </div>
      </div>

      <hr className=" text-gray400" />

      <div >
        <h2 className="text-gray300 text-xs">CONTA</h2>
        <div className="flex items-center justify-between pt-[12px]">
          <div className="flex items-center gap-1 ">
            <UserCircle className="text-gray100" size={20} />
            <h3 className="text-gray100 text-md">Dados pessoais</h3>
          </div>
          <CaretRight className="text-gray300" size={16} />
        </div>
        <div className="flex items-center justify-between pt-[12px]">
          <div className="flex items-center gap-1 ">
            <Key className="text-gray100" size={20} />
            <h3 className="text-gray100 text-md">Informações de login</h3>
          </div>
          <CaretRight className="text-gray300" size={16} />
        </div>
      </div>

      <hr className="text-gray400" />

      <div >
        <h2 className="text-gray300 text-xs">PREFERÊNCIAS</h2>
        <div className="flex items-center justify-between pt-[12px]">
          <div className="flex items-center gap-1 ">
            <Bell className="text-gray100" size={20} />
            <h3 className="text-gray100 text-md">Notificações</h3>
          </div>
          <CaretRight className="text-gray300" size={16} />
        </div>
        <div className="flex items-center justify-between pt-[12px]">
          <div className="flex items-center gap-1 ">
            <PersonArmsSpread className="text-gray100" size={20} />
            <h3 className="text-gray100 text-md">Acessibilidade</h3>
          </div>
          <CaretRight className="text-gray300" size={16} />
        </div>
      </div>

      <hr className="text-gray400" />

      <div >
        <h2 className="text-gray300 text-xs">PRIVACIDADE</h2>
        <div className="flex items-center justify-between pt-[12px]">
          <div className="flex items-center gap-1 ">
            <Devices className="text-gray100" size={20} />
            <h3 className="text-gray100 text-md">Aparelhos conectados</h3>
          </div>
          <CaretRight className="text-gray300" size={16} />
        </div>
        <div className="flex items-center justify-between pt-[12px]">
          <div className="flex items-center gap-1 ">
            <UserSwitch className="text-gray100" size={20} />
            <h3 className="text-gray100 text-md">Contas vinculadas</h3>
          </div>
          <CaretRight className="text-gray300" size={16} />
        </div>
      </div>

      <hr className="text-gray400" />

      <div>
        <div className="pt-[12px]">
          <div className="flex items-center gap-1 ">
            <Question className="text-gray100" size={20} />
            <h3 className="text-gray100 text-md">Central de Ajuda</h3>
          </div>
        </div>
        <div className="flex items-center justify-between pt-[12px]">
          <div className="flex items-center gap-1 ">
            <SignOut className="text-red" size={20} />
            <h3 className="text-red text-md">Sair</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
