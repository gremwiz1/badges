import CountRedShadowBadge from './CountRedShadowBadge.vue'

export default {
  title: 'Components/CountRedShadowBadge',
  component: CountRedShadowBadge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: { type: 'text' }
    }
  }
}

const Template = (args) => ({
  components: { CountRedShadowBadge },
  setup() {
    return { args }
  },
  template: '<CountRedShadowBadge v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  text: '2'
}

export const DifferentNumbers = {
  components: { CountRedShadowBadge },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; padding: 20px;">
      <CountRedShadowBadge text="2" />
      <CountRedShadowBadge text="5" />
      <CountRedShadowBadge text="10" />
      <CountRedShadowBadge text="25" />
      <CountRedShadowBadge text="100" />
    </div>
  `
}

export const SingleDigits = {
  components: { CountRedShadowBadge },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; padding: 20px;">
      <CountRedShadowBadge text="1" />
      <CountRedShadowBadge text="2" />
      <CountRedShadowBadge text="3" />
      <CountRedShadowBadge text="4" />
      <CountRedShadowBadge text="5" />
      <CountRedShadowBadge text="6" />
      <CountRedShadowBadge text="7" />
      <CountRedShadowBadge text="8" />
      <CountRedShadowBadge text="9" />
    </div>
  `
}
