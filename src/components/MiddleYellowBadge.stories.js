import MiddleYellowBadge from './MiddleYellowBadge.vue'

export default {
  title: 'Components/MiddleYellowBadge',
  component: MiddleYellowBadge,
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
  components: { MiddleYellowBadge },
  setup() {
    return { args }
  },
  template: '<MiddleYellowBadge v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  text: '1 000',
  showIcon: true
}

export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  text: '500',
  showIcon: false
}

export const DifferentNumbers = {
  components: { MiddleYellowBadge },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; padding: 20px;">
      <MiddleYellowBadge text="1 000" :show-icon="true" />
      <MiddleYellowBadge text="500" :show-icon="true" />
      <MiddleYellowBadge text="100" :show-icon="true" />
      <MiddleYellowBadge text="25" :show-icon="true" />
    </div>
  `
}
