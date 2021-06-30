/* eslint-disable prettier/prettier */

import React from 'react'
import PropTypes from 'prop-types'
import Avatarframe from './avatar-frame'
import AvatarRing from './avatar-ring'
import AvatarPixel from './avatar-pixel'
import Avatarsmilly from './avatar-smilly'
import AvatarSunset from './avatar-sunset'
import AvatarMarble from './avatar-marble'
import AvatarTriangle from './avatar-triangle'
import AvatarPattern from './avatar-patterns'
import Avatarclassic from './avatar-classic'

const variants = [
  'pixel',
  'frame',
  'ring',
  'smilly',
  'sunset',
  'marble',
  'triangle',
  'patterns',
  'classic'
]
const deprecatedVariants = { geometric: 'smilly', abstract: 'frame' }

const Avatar = ({
  variant = 'pixel',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  size = 40,
  radius = 100,
  ...props
}) => {
  const avatarProps = { colors, name, size, radius, ...props }
  const checkedVariant = () => {
    if (Object.keys(deprecatedVariants).includes(variant)) {
      return deprecatedVariants[variant]
    }
    if (variants.includes(variant)) {
      return variant
    }
    return 'marble'
  }
  const avatars = {
    pixel: <AvatarPixel {...avatarProps} />,
    frame: <Avatarframe {...avatarProps} />,
    ring: <AvatarRing {...avatarProps} />,
    smilly: <Avatarsmilly {...avatarProps} />,
    sunset: <AvatarSunset {...avatarProps} />,
    marble: <AvatarMarble {...avatarProps} />,
    triangle: <AvatarTriangle {...avatarProps} />,
    patterns: <AvatarPattern {...avatarProps} />,
    classic: <Avatarclassic {...avatarProps} />
  }
  return avatars[checkedVariant()]
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(variants)
}

export default Avatar
