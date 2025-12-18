import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const VARIANT_STYLES = {
  success: {
    container: { backgroundColor: colors.success[100] },
    text: { color: colors.success[700] },
  },
  warning: {
    container: { backgroundColor: colors.warning[100] },
    text: { color: colors.warning[700] },
  },
  neutral: {
    container: { backgroundColor: colors.neutral[100] },
    text: { color: colors.neutral[600] },
  },
};

const Badge = ({ children, variant = 'neutral', icon, style, textStyle }) => {
  const resolvedVariant = VARIANT_STYLES[variant] ? variant : 'neutral';
  const { container, text } = VARIANT_STYLES[resolvedVariant];

  return (
    <View style={[styles.badge, container, icon && styles.badgeWithIcon, style]}>
      {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}
      <Text style={[styles.text, text, textStyle]} numberOfLines={1}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.neutral[200],
  },
  badgeWithIcon: {
    paddingRight: 14,
  },
  iconWrapper: {
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.neutral[700],
  },
});

export default Badge;
