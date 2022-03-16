/*!
 * Copyright 2021 WPPConnect Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Debug from 'debug';

import * as webpack from '../../webpack';
import { Socket } from '../../whatsapp';
import { isIdle } from '..';
import { eventEmitter } from '../eventEmitter';

const debug = Debug('WA-JS:conn');

webpack.onInjected(registerQRCodeIdleEvent);

function registerQRCodeIdleEvent() {
  const trigger = async () => {
    const idle = isIdle();
    if (idle) {
      eventEmitter.emit('qrcode_idle');
    }
  };
  trigger();
  Socket.on('change:state', trigger);

  debug('idle event registered');
}