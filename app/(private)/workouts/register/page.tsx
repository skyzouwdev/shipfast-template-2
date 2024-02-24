'use client';
// import { useState } from "react";


import { zodResolver } from '@hookform/resolvers/zod';

import { Info, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { z } from 'zod';

import Layout from "@/components/layout/Layout";
import { Button } from '@/components/ui/Button';
import { CalendarInput } from '@/components/ui/Form/CalendarInput';
import { ComboBoxInput } from '@/components/ui/Form/ComboBoxInput';
import { TextInput } from '@/components/ui/Form/TextInput';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/TabsAlternative';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip';
import { TopBar } from "@/components/ui/TopBar";
import { DAYS_WORKOUT, DAYS_WORKOUT_RANGE } from '@/constants';
import { useSchema } from '@/hooks/useSchema';
import { useListStudents } from '@/services/hooks/useListStudents';

type NewWorkoutProps = Required<z.infer<typeof useSchema.newWorkout>>;

export interface ExerciseInterface {
  name: string;
  sets: number;
  repetitions: Array<number>;
  videoLink: string;
  observation: string;
}
const initalTabs = ['A', 'B', 'C'];

export default function Register() {
  const [workoutTabs, setWorkoutTabs] = useState(initalTabs);
  const [selectedWorkoutTab, setSelectedWorkoutTab] = useState(initalTabs[0]);

  const { data: listStudents } = useListStudents({ refetchOnWindowFocus: false });
  const studentsData = listStudents?.map(student => {
    return { label: student.name + ' ' + student.surname, value: student.id }
  }) || [];
  // const [workoutTabs, setWorkoutTabs] = useState<string>("ABC");
  // const [selectedWorkoutTab, setSelectedWorkoutTab] = useState<string>("A");
  // const [exercises, setExercises] = useState<{ [key: string]: ExerciseInterface[] }>({});
  // const [editingExercise, setEditingExercise] = useState({ exercise: null, tab: '', index: -1 });

  // const addExercise = (exercise: ExerciseInterface) => {
  //   setExercises(prevExercises => ({
  //     ...prevExercises,
  //     [selectedWorkoutTab]: [...(prevExercises[selectedWorkoutTab] || []), exercise]
  //   }));
  // };

  // const deleteExercise = (tab: string, index: number) => {
  //   setExercises(prevExercises => ({
  //     ...prevExercises,
  //     [tab]: prevExercises[tab].filter((_, i) => i !== index),
  //   }));
  // };

  // const editExercise = (exercise: ExerciseInterface, tab: string, index: number) => {
  //   setEditingExercise({ exercise, tab, index });
  // };

  // const saveEditedExercise = (type: string, editedExercise: ExerciseInterface) => {
  //   setExercises(prevExercises => ({
  //     ...prevExercises,
  //     [type]: prevExercises[type].map((ex, i) =>
  //       i === editingExercise.index ? editedExercise : ex
  //     ),
  //   }));

  //   setEditingExercise({ exercise: null, tab: '', index: -1 });
  // };


  const handleAddNewTabOnOrder = () => {
    setWorkoutTabs(prevTabs => {
      const asciiCodeLastPosition = prevTabs.at(-1).charCodeAt(0);
      return [...prevTabs, String.fromCharCode(asciiCodeLastPosition + 1)];
    });
  }

  const methods = useForm<NewWorkoutProps>({
    resolver: zodResolver(useSchema.newWorkout),
  });

  const onSubmit = (data: NewWorkoutProps) => {
    console.log(data);
  }

  return (
    <Layout>

      <TopBar.Root>
        <TopBar.Title>
          Novo Treino
        </TopBar.Title>
        <TopBar.Action className='flex items-center'>
          <Button variant='outline_secundary' className='mr-4'>Cancelar</Button>
          <Button variant='secondary' className='py-5'>Salvar</Button>
        </TopBar.Action>
      </TopBar.Root>

      <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-6">
        <FormProvider {...methods}>
          <TextInput
            label='Descrição do treino'
            placeholder='Exemplo: Semana 1'
            classNameContainer='col-span-2'
            name='descriptionWorkout'
          />

          <CalendarInput
            name='startDate'
            label='Início'
          />

          <CalendarInput
            name='endDate'
            label='Término'
          />

          <CalendarInput
            name='revaluation'
            label='Reavaliação'
          />

          <ComboBoxInput
            name='daysOfWorkout'
            label='Dias de treino'
            data={DAYS_WORKOUT}
            subData={DAYS_WORKOUT_RANGE}
            useSubData
            placeholder='Selecione uma opção'
          />

          <ComboBoxInput
            name='student'
            label='Aluno'
            data={studentsData}
            classNameContainer='col-span-2'
            placeholder='Selecione uma opção'
          />


          <TextInput
            label='Objetivo'
            classNameContainer='col-span-2'
            placeholder='Exemplo: Hipertrofia'
            name='objective' />

          <TextInput
            label='Observação'
            classNameContainer='col-span-2'
            placeholder='Exemplo: Mobilidade todos os dias antes do treino'
            name='obs' />
        </FormProvider>

      </form>

      <Tabs defaultValue={workoutTabs[0]} className="mt-8" onValueChange={setSelectedWorkoutTab}>
        <TabsList className="">
          {
            workoutTabs.map((tab) => (
              <TabsTrigger key={tab} className='mr-2 text-lg hover:border-b-2 hover:border-b-secondary ' value={tab}>Treino {tab}</TabsTrigger>
            ))
          }

          <Button
            variant='clear'
            onClick={handleAddNewTabOnOrder}
            className='mr-2 flex items-center text-lg text-secondary hover:border hover:border-secondary'
          >
            <PlusCircle className='mr-2' />
            Treino
          </Button>
        </TabsList>
        <div className='mt-6 flex items-center justify-between'>
          <div className='flex items-center'>
            <Button variant='secondary' className='ml-2 mr-8'>Adicionar Exercício</Button>
            <div className='flex items-center'>
              <Button variant='outline_secundary' className='mr-3'>Adicionar Exercício da Biblioteca</Button>

              <Tooltip>
                Na Biblioteca Pump você encontra vários exercícios pré-definidos que te ajudarão a agilizar o processo de adicionar exercícios.
                O melhor de tudo é que, depois de adicionados, você pode editá-los ajustando o exercício como preferir.
              </Tooltip>
            </div>
          </div>

          <Button variant='destructive'>Excluir treino</Button>
        </div>

        <TabsContent value="account">
          b
        </TabsContent>
        <TabsContent value="password">
          a
        </TabsContent>
      </Tabs>

    </Layout >
  )
}
