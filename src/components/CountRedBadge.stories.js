import CountRedBadge from './CountRedBadge.vue'

export default {
  title: 'Components/CountRedBadge',
  component: CountRedBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    showIcon: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args) => ({
  components: { CountRedBadge },
  setup() {
    return { args }
  },
  template: '<CountRedBadge v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  text: '1 000',
  showIcon: true
}

export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  text: '999',
  showIcon: false
}

export const DifferentNumbers = {
  components: { CountRedBadge },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; padding: 20px;">
      <CountRedBadge text="1 000" :show-icon="true" />
      <CountRedBadge text="999" :show-icon="true" />
      <CountRedBadge text="50" :show-icon="true" />
      <CountRedBadge text="5" :show-icon="true" />
    </div>
  `
}
