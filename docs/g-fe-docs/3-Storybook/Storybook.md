---
sidebar_position: 2
---

- [예제 코드로 Storybook 이해하기](#예제-코드로-storybook-이해하기)
  - [설치 방법](#설치-방법)
    - [1. 빌드 시스템 설정](#1-빌드-시스템-설정)
    - [2. 작동 확인](#2-작동-확인)
  - [예제 코드로 Storybook 익히기](#예제-코드로-storybook-익히기)
    - [**1. decorators의 역할**](#1-decorators의-역할)
    - [**2. args의 역할**](#2-args의-역할)
    - [**3. Template.bind({})의 역할**](#3-templatebind의-역할)
    - [**4. tasks의 역할**](#4-tasks의-역할)


# 예제 코드로 Storybook 이해하기

## 설치 방법

### 1. 빌드 시스템 설정
```
# Clone the template
npx degit chromaui/intro-storybook-react-template taskbox

cd taskbox

# Install dependencies
yarn
```

### 2. 작동 확인
```
# Start the component explorer:
yarn storybook

# Run the frontend app proper:
yarn dev
```

## 예제 코드로 Storybook 익히기

```js
import React from 'react';

import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Task.stories.js.
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
```

### **1. decorators의 역할**

 **`decorators`** 는 Storybook에서 컴포넌트 스토리를 렌더링할 때 추가적인 래핑 또는 컨텍스트 설정을 제공하는 함수입니다. 이는 스토리에 스타일을 적용하거나, 스토리를 특정 환경(예: 데이터 프로바이더, 테마) 내에서 렌더링하는 데 사용될 수 있습니다. 여기서는 각 스토리가 **`<div>`** 태그로 래핑되고, 패딩이 **`'3rem'`** 으로 설정되어 컴포넌트 주변에 여백을 추가하는 역할을 합니다.

### **2. args의 역할**

**`args`** 는 Storybook에서 컴포넌트의 인수(arguments)를 정의하는 방법입니다. 이를 통해 스토리의 컴포넌트에 전달될 props를 설정할 수 있으며, Storybook UI에서 동적으로 변경하여 컴포넌트의 다양한 상태를 쉽게 탐색하고 테스트할 수 있게 합니다. **`args`** 는 컴포넌트의 재사용성과 다양한 상황에서의 컴포넌트 동작을 시각적으로 문서화하는 데 유용합니다.

### **3. Template.bind({})의 역할**

**`Template.bind({})`** 는 JavaScript의 **`bind`** 메서드를 사용하여 **`Template`** 함수의 복사본을 생성합니다. 이는 각 스토리가 동일한 **`Template`** 함수를 기반으로 하면서도, 서로 다른 **`args`** 를 가질 수 있게 해줍니다. **`bind`** 를 사용함으로써, **`Template`** 함수의 컨텍스트(this)와 인수(args)를 고정시키지 않고, 각 스토리에서 독립적인 **`args`** 설정을 제공할 수 있습니다. 이 방법은 스토리 정의를 DRY(Don't Repeat Yourself)하게 유지하는 데 도움이 됩니다.

### **4. tasks의 역할**

**`tasks`** 는 **`TaskList`** 컴포넌트에 전달되는 props 중 하나로, 여러 개의 작업(task) 정보를 담고 있는 배열입니다. 이 배열은 각 작업의 ID, 제목, 상태 등을 포함할 수 있으며, **`TaskList`** 컴포넌트는 이 정보를 사용하여 작업 목록을 렌더링합니다. **`Default`**, **`WithPinnedTasks`**, **`Loading`**, **`Empty`** 등의 스토리는 다양한 **`tasks`** 배열(또는 다른 상태)을 **`TaskList`** 컴포넌트에 전달하여, 컴포넌트가 다양한 상황에서 어떻게 보이고 동작하는지를 보여줍니다.