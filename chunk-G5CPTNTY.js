import "./chunk-3MOD5TGX.js";

// node_modules/@ali-tas/htmldiff-js/dist/index.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var NoMatch = {
  size: 0,
  startInNew: 0,
  endInNew: 0,
  endInOld: 0,
  startInOld: 0
};
var tagRegex = /^\s*<[^>]+>\s*$/;
var tagWordRegex = /<[^\s>]+/;
var whitespaceRegex = /^(?:\s|&nbsp;)+$/;
var wordRegex = /[\p{Script_Extensions=Latin}\d@#]+/u;
var specialCaseWordTags = ["<img"];
var isTag = (item) => !specialCaseWordTags.some((tag) => item == null ? void 0 : item.startsWith(tag)) && tagRegex.test(item);
var stripTagAttributes = (word) => {
  var _a;
  const tag = (_a = tagWordRegex.exec(word)) == null ? void 0 : _a[0];
  return tag ? tag + (word.endsWith("/>") ? "/>" : ">") : word;
};
var wrapText = (text, tagName, cssClass) => `<${tagName} class="${cssClass}">${text}</${tagName}>`;
var isStartOfTag = (val) => val === "<";
var isEndOfTag = (val) => val === ">";
var isStartOfEntity = (val) => val === "&";
var isEndOfEntity = (val) => val === ";";
var isWhiteSpace = (value) => value !== void 0 && whitespaceRegex.test(value);
var stripAnyAttributes = (word) => isTag(word) ? stripTagAttributes(word) : word;
var isWord = (text) => text !== void 0 && wordRegex.test(text);
function putNewWord(block, word, blockSize) {
  block.push(word);
  if (block.length > blockSize) {
    block.shift();
  }
  if (block.length !== blockSize) {
    return null;
  }
  return block.join("");
}
function normalizeForIndex(word, ignoreWhiteSpaceDifferences) {
  const stripped = stripAnyAttributes(word);
  if (ignoreWhiteSpaceDifferences && isWhiteSpace(stripped)) {
    return " ";
  }
  return stripped;
}
function indexNewWords(newWords, startIndex, endIndex, options) {
  var _a;
  const wordIndices = /* @__PURE__ */ new Map();
  const block = [];
  for (let i = startIndex; i < endIndex; i++) {
    const newWord = newWords[i];
    if (newWord === void 0) continue;
    const word = normalizeForIndex(newWord, options.ignoreWhiteSpaceDifferences);
    const key = putNewWord(block, word, options.blockSize);
    if (key === null) {
      continue;
    }
    if (wordIndices.has(key)) {
      (_a = wordIndices.get(key)) == null ? void 0 : _a.push(i);
    } else {
      wordIndices.set(key, [i]);
    }
  }
  return wordIndices;
}
function findMatch(oldWords, newWords, startInOld, endInOld, startInNew, endInNew, options) {
  var _a, _b;
  const wordIndices = indexNewWords(newWords, startInNew, endInNew, options);
  if (wordIndices.size === 0) {
    return null;
  }
  let bestMatchInOld = startInOld;
  let bestMatchInNew = startInNew;
  let bestMatchSize = 0;
  let matchLengthAt = /* @__PURE__ */ new Map();
  const blockSize = options.blockSize;
  const block = [];
  for (let indexInOld = startInOld; indexInOld < endInOld; indexInOld++) {
    const oldWord = oldWords[indexInOld];
    if (oldWord === void 0) continue;
    const word = normalizeForIndex(oldWord, options.ignoreWhiteSpaceDifferences);
    const index = putNewWord(block, word, blockSize);
    if (index === null) {
      continue;
    }
    const newMatchLengthAt = /* @__PURE__ */ new Map();
    if (!wordIndices.has(index)) {
      matchLengthAt = newMatchLengthAt;
      continue;
    }
    const indices = (_a = wordIndices.get(index)) != null ? _a : [];
    for (const indexInNew of indices) {
      const newMatchLength = ((_b = matchLengthAt.get(indexInNew - 1)) != null ? _b : 0) + 1;
      newMatchLengthAt.set(indexInNew, newMatchLength);
      if (newMatchLength > bestMatchSize) {
        bestMatchInOld = indexInOld - newMatchLength - blockSize + 2;
        bestMatchInNew = indexInNew - newMatchLength - blockSize + 2;
        bestMatchSize = newMatchLength;
      }
    }
    matchLengthAt = newMatchLengthAt;
  }
  const matchSize = bestMatchSize + blockSize - 1;
  return bestMatchSize !== 0 ? {
    startInOld: bestMatchInOld,
    startInNew: bestMatchInNew,
    endInOld: bestMatchInOld + matchSize,
    endInNew: bestMatchInNew + matchSize,
    size: matchSize
  } : null;
}
function convertHtmlToListOfWords(text, blockExpressions) {
  var _a, _b, _c;
  const state = {
    mode: "character",
    currentWord: [],
    words: []
  };
  const blockLocations = findBlocks(text, blockExpressions);
  const isBlockCheckRequired = !!blockLocations.size;
  let isGrouping = false;
  let groupingUntil = -1;
  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    if (character === void 0) continue;
    if (isBlockCheckRequired) {
      if (groupingUntil === index) {
        groupingUntil = -1;
        isGrouping = false;
      }
      let until = 0;
      if (blockLocations.has(index)) {
        until = (_a = blockLocations.get(index)) != null ? _a : 0;
        isGrouping = true;
        groupingUntil = until;
      }
      if (isGrouping) {
        state.currentWord.push(character);
        state.mode = "character";
        continue;
      }
    }
    switch (state.mode) {
      case "character":
        if (isStartOfTag(character)) {
          addClearWordSwitchMode(state, "<", "tag");
        } else if (isStartOfEntity(character)) {
          addClearWordSwitchMode(state, character, "entity");
        } else if (isWhiteSpace(character)) {
          addClearWordSwitchMode(state, character, "whitespace");
        } else if (isWord(character) && (state.currentWord.length === 0 || isWord(state.currentWord[state.currentWord.length - 1]))) {
          state.currentWord.push(character);
        } else {
          addClearWordSwitchMode(state, character, "character");
        }
        break;
      case "tag":
        if (isEndOfTag(character)) {
          state.currentWord.push(character);
          state.words.push(state.currentWord.join(""));
          state.currentWord = [];
          state.mode = isWhiteSpace(character) ? "whitespace" : "character";
        } else {
          state.currentWord.push(character);
        }
        break;
      case "whitespace":
        if (isStartOfTag(character)) {
          addClearWordSwitchMode(state, character, "tag");
        } else if (isStartOfEntity(character)) {
          addClearWordSwitchMode(state, character, "entity");
        } else if (isWhiteSpace(character)) {
          state.currentWord.push(character);
        } else {
          addClearWordSwitchMode(state, character, "character");
        }
        break;
      case "entity":
        if (isStartOfTag(character)) {
          addClearWordSwitchMode(state, character, "tag");
        } else if (isWhiteSpace(character)) {
          addClearWordSwitchMode(state, character, "whitespace");
        } else if (isEndOfEntity(character)) {
          let switchToNextMode = true;
          if (state.currentWord.length !== 0) {
            state.currentWord.push(character);
            state.words.push(state.currentWord.join(""));
            if (state.words.length > 2 && isWhiteSpace(state.words[state.words.length - 2]) && isWhiteSpace(state.words[state.words.length - 1])) {
              const w1 = (_b = state.words[state.words.length - 2]) != null ? _b : "";
              const w2 = (_c = state.words[state.words.length - 1]) != null ? _c : "";
              state.words.splice(state.words.length - 2, 2);
              state.currentWord = [w1, w2];
              state.mode = "whitespace";
              switchToNextMode = false;
            }
          }
          if (switchToNextMode) {
            state.currentWord = [];
            state.mode = "character";
          }
        } else if (isWord(character)) {
          state.currentWord.push(character);
        } else {
          addClearWordSwitchMode(state, character, "character");
        }
        break;
    }
  }
  if (state.currentWord.length !== 0) {
    state.words.push(state.currentWord.join(""));
  }
  return state.words;
}
function addClearWordSwitchMode(state, character, mode) {
  if (state.currentWord.length !== 0) {
    state.words.push(state.currentWord.join(""));
  }
  state.currentWord = [character];
  state.mode = mode;
}
function findBlocks(text, blockExpressions) {
  const blockLocations = /* @__PURE__ */ new Map();
  if (blockExpressions === null) {
    return blockLocations;
  }
  for (const exp of blockExpressions) {
    let m = exp.exec(text);
    while (m !== null) {
      if (blockLocations.has(m.index)) {
        throw new Error(`One or more block expressions result in a text sequence that overlaps. Current expression: ${exp.toString()}`);
      }
      blockLocations.set(m.index, m.index + m[0].length);
      m = exp.exec(text);
    }
  }
  return blockLocations;
}
var specialCaseClosingTags = /* @__PURE__ */ new Map([["</strong>", 0], ["</em>", 0], ["</b>", 0], ["</i>", 0], ["</big>", 0], ["</small>", 0], ["</u>", 0], ["</sub>", 0], ["</strike>", 0], ["</s>", 0], ["</dfn>", 0]]);
var specialCaseOpeningTagRegex = /<(?:strong|[biu]|dfn|em|big|small|sub|sup|strike|s)[>\s]+/gi;
function build(oldText, newText, options) {
  var _a, _b, _c, _d, _e;
  if (oldText === newText) {
    return newText;
  }
  const {
    oldWords,
    newWords
  } = splitInputsIntoWords(oldText, newText, []);
  const matchGranularity = Math.min((_a = options == null ? void 0 : options.matchGranularity) != null ? _a : 4, oldWords.length, newWords.length);
  const operations = getOperations(oldWords, newWords, (_b = options == null ? void 0 : options.combineWords) != null ? _b : false, (_c = options == null ? void 0 : options.orphanMatchThreshold) != null ? _c : 0, matchGranularity, (_d = options == null ? void 0 : options.repeatingWordsAccuracy) != null ? _d : 1, (_e = options == null ? void 0 : options.ignoreWhiteSpaceDifferences) != null ? _e : false);
  const specialTagDiffStack = [];
  const content = operations.map((operation) => performOperation(operation, oldWords, newWords, specialTagDiffStack));
  return content.join("");
}
function splitInputsIntoWords(oldText, newText, blockExpressions) {
  const oldWords = convertHtmlToListOfWords(oldText, blockExpressions);
  const newWords = convertHtmlToListOfWords(newText, blockExpressions);
  return {
    oldWords,
    newWords
  };
}
function performOperation(operation, oldWords, newWords, specialTagDiffStack) {
  switch (operation.action) {
    case "equal":
      return processEqualOperation(operation, newWords);
    case "delete":
      return processDeleteOperation(operation, "diffdel", oldWords, specialTagDiffStack);
    case "insert":
      return processInsertOperation(operation, "diffins", newWords, specialTagDiffStack);
    case "replace":
      return processReplaceOperation(operation, oldWords, newWords, specialTagDiffStack);
    default:
      return "";
  }
}
function processReplaceOperation(operation, oldWords, newWords, specialTagDiffStack) {
  const deletedContent = processDeleteOperation(operation, "diffmod", oldWords, specialTagDiffStack);
  const insertedContent = processInsertOperation(operation, "diffmod", newWords, specialTagDiffStack);
  return `${deletedContent}${insertedContent}`;
}
function processInsertOperation(operation, cssClass, newWords, specialTagDiffStack) {
  const text = newWords.filter((_s, pos) => pos >= operation.startInNew && pos < operation.endInNew);
  return insertTag("ins", cssClass, text, specialTagDiffStack);
}
function processDeleteOperation(operation, cssClass, oldWords, specialTagDiffStack) {
  const text = oldWords.filter((_s, pos) => pos >= operation.startInOld && pos < operation.endInOld);
  return insertTag("del", cssClass, text, specialTagDiffStack);
}
function processEqualOperation(operation, newWords) {
  const result = newWords.filter((_s, pos) => pos >= operation.startInNew && pos < operation.endInNew);
  return result.join("");
}
function insertTag(tag, cssClass, words, specialTagDiffStack) {
  var _a;
  const content = [];
  while (words[0] !== void 0) {
    const nonTags = extractConsecutiveWords(words, (x) => !isTag(x));
    let specialCaseTagInjection = "";
    let specialCaseTagInjectionIsbefore = false;
    if (nonTags.length !== 0) {
      const text = wrapText(nonTags.join(""), tag, cssClass);
      content.push(text);
    } else {
      if (specialCaseOpeningTagRegex.test(words[0])) {
        const matchedTag = words[0].match(specialCaseOpeningTagRegex);
        if (matchedTag !== null) {
          const matchedDiff = `<${matchedTag[0].replace(/[<> ]/g, "")}>`;
          specialTagDiffStack.push(matchedDiff);
        }
        specialCaseTagInjection = '<ins class="mod">';
        if (tag === "del") {
          words.shift();
          while (words.length > 0 && specialCaseOpeningTagRegex.test(words[0])) {
            words.shift();
          }
        }
      } else if (specialCaseClosingTags.has(words[0])) {
        const openingTag = specialTagDiffStack.length === 0 ? null : specialTagDiffStack.pop();
        if (!(openingTag === null || openingTag !== ((_a = words[words.length - 1]) == null ? void 0 : _a.replace(/\//g, "")))) {
          specialCaseTagInjection = "</ins>";
          specialCaseTagInjectionIsbefore = true;
        }
        if (tag === "del") {
          words.shift();
          while (words.length > 0 && specialCaseClosingTags.has(words[0])) {
            words.shift();
          }
        }
      }
      if (words.length === 0 && specialCaseTagInjection.length === 0) {
        break;
      }
      if (specialCaseTagInjectionIsbefore) {
        content.push(specialCaseTagInjection + extractConsecutiveWords(words, isTag).join(""));
      } else {
        content.push(extractConsecutiveWords(words, isTag).join("") + specialCaseTagInjection);
      }
    }
  }
  return content.join("");
}
function extractConsecutiveWords(words, condition) {
  let indexOfFirstTag = 0;
  let tagFound = false;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word === void 0) continue;
    if (i === 0 && word === " ") {
      words[i] = "&nbsp;";
    }
    if (!condition(word)) {
      indexOfFirstTag = i;
      tagFound = true;
      break;
    }
  }
  if (!tagFound) {
    indexOfFirstTag = words.length;
  }
  const items = words.filter((_s, pos) => pos >= 0 && pos < indexOfFirstTag);
  if (indexOfFirstTag > 0) {
    words.splice(0, indexOfFirstTag);
  }
  return items;
}
function getOperations(oldWords, newWords, combineWords, orphanMatchThreshold, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences) {
  let positionInOld = 0;
  let positionInNew = 0;
  const operations = [];
  const oldWordsCount = oldWords.length;
  const newWordsCount = newWords.length;
  const matches = getMatchingBlocks(oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences);
  matches.push({
    startInOld: oldWordsCount,
    startInNew: newWordsCount,
    endInOld: oldWordsCount,
    endInNew: newWordsCount,
    size: 0
  });
  const matchesWithoutOrphans = removeOrphans(matches, oldWords, newWords, orphanMatchThreshold);
  for (const match of matchesWithoutOrphans) {
    if (match === null) continue;
    const matchStartsAtCurrentPositionInOld = positionInOld === match.startInOld;
    const matchStartsAtCurrentPositionInNew = positionInNew === match.startInNew;
    let action;
    if (!matchStartsAtCurrentPositionInOld && !matchStartsAtCurrentPositionInNew) {
      action = "replace";
    } else if (matchStartsAtCurrentPositionInOld && !matchStartsAtCurrentPositionInNew) {
      action = "insert";
    } else if (!matchStartsAtCurrentPositionInOld) {
      action = "delete";
    } else {
      action = "none";
    }
    if (action !== "none") {
      operations.push({
        action,
        startInOld: positionInOld,
        endInOld: match.startInOld,
        startInNew: positionInNew,
        endInNew: match.startInNew
      });
    }
    if (match.size !== 0) {
      operations.push({
        action: "equal",
        startInOld: match.startInOld,
        endInOld: match.endInOld,
        startInNew: match.startInNew,
        endInNew: match.endInNew
      });
    }
    positionInOld = match.endInOld;
    positionInNew = match.endInNew;
  }
  return combineWords ? combineOperations(operations, oldWords, newWords) : operations;
}
function combineOperations(operations, oldWords, newWords) {
  const combinedOperations = [];
  const operationIsWhitespace = (op) => isWhiteSpace(oldWords.filter((_word, pos) => pos >= op.startInOld && pos < op.endInOld).join("")) && isWhiteSpace(newWords.filter((_word, pos) => pos >= op.startInNew && pos < op.endInNew).join(""));
  const lastOperation = operations[operations.length - 1];
  for (let index = 0; index < operations.length; index++) {
    const operation = operations[index];
    if (operation === void 0) continue;
    if (operation.action === "replace") {
      let matchFound = false;
      for (let combineIndex = index + 1; combineIndex < operations.length; combineIndex++) {
        const operationToCombine = operations[combineIndex];
        if (operationToCombine === void 0) continue;
        if (operationToCombine.action !== "replace" && operationToCombine.action === "equal" && !operationIsWhitespace(operationToCombine)) {
          combinedOperations.push({
            action: "replace",
            startInOld: operation.startInOld,
            endInOld: operationToCombine.startInOld,
            startInNew: operation.startInNew,
            endInNew: operationToCombine.startInNew
          });
          index = combineIndex - 1;
          matchFound = true;
          break;
        }
      }
      if (!matchFound && lastOperation) {
        combinedOperations.push({
          action: "replace",
          startInOld: operation.startInOld,
          endInOld: lastOperation.endInOld,
          startInNew: operation.startInNew,
          endInNew: lastOperation.endInNew
        });
        break;
      }
    } else {
      combinedOperations.push(operation);
    }
  }
  return combinedOperations;
}
function removeOrphans(matches, oldWords, newWords, orphanMatchThreshold) {
  const matchesWithoutOrphans = [];
  let prev = __spreadValues({}, NoMatch);
  let curr = null;
  for (const next of matches) {
    if (curr === null) {
      prev = __spreadValues({}, NoMatch);
      curr = next;
      continue;
    }
    if (prev.endInOld === curr.startInOld && prev.endInNew === curr.startInNew || curr.endInOld === next.startInOld && curr.endInNew === next.startInNew) {
      matchesWithoutOrphans.push(curr);
      prev = curr;
      curr = next;
      continue;
    }
    const sumLength = (sum, word) => sum + word.length;
    const oldDistanceInChars = oldWords.slice(prev.endInOld, next.startInOld).reduce(sumLength, 0);
    const newDistanceInChars = newWords.slice(prev.endInNew, next.startInNew).reduce(sumLength, 0);
    const currMatchLengthInChars = newWords.slice(curr.startInNew, curr.endInNew).reduce(sumLength, 0);
    if (currMatchLengthInChars > Math.max(oldDistanceInChars, newDistanceInChars) * orphanMatchThreshold) {
      matchesWithoutOrphans.push(curr);
    }
    prev = curr;
    curr = next;
  }
  if (curr !== null) matchesWithoutOrphans.push(curr);
  return matchesWithoutOrphans;
}
function getMatchingBlocks(oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences) {
  return findMatchingBlocks(0, oldWords.length, 0, newWords.length, oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences);
}
function findMatchingBlocks(startInOld, endInOld, startInNew, endInNew, oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences) {
  if (startInOld >= endInOld || startInNew >= endInNew) return [];
  const match = findMatchByGranularity(startInOld, endInOld, startInNew, endInNew, oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences);
  if (match === null) return [];
  const preMatch = findMatchingBlocks(startInOld, match.startInOld, startInNew, match.startInNew, oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences);
  const postMatch = findMatchingBlocks(match.endInOld, endInOld, match.endInNew, endInNew, oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences);
  return [...preMatch, match, ...postMatch];
}
function findMatchByGranularity(startInOld, endInOld, startInNew, endInNew, oldWords, newWords, matchGranularity, repeatingWordsAccuracy, ignoreWhiteSpaceDifferences) {
  for (let i = matchGranularity; i > 0; i--) {
    const options = {
      blockSize: i,
      repeatingWordsAccuracy,
      ignoreWhiteSpaceDifferences
    };
    const match = findMatch(oldWords, newWords, startInOld, endInOld, startInNew, endInNew, options);
    if (match !== null) {
      return match;
    }
  }
  return null;
}
function execute(oldText, newText, options) {
  return build(oldText, newText, options);
}
var Diff = {
  execute
};
export {
  Diff
};
//# sourceMappingURL=chunk-G5CPTNTY.js.map
